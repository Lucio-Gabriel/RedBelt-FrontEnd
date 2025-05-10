import React, { useState } from "react";
import { Check, Undo2, Siren } from "lucide-react";

const url = import.meta.env.VITE_API_URL;

function CreateAlarmPage() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    date: "",
    criticidade: "",
    status: "",
    ativo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(url);

    try {
      const responseAlarmTypes = await fetch(`${url}/alarms-types`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          description: form.description,
        }),
      });

      const dataAlarmTypes = await responseAlarmTypes.json();

      alert(dataAlarmTypes.message || "Alarme criado com sucesso!");

      const alarmTypeId = dataAlarmTypes.data.ID;

      const data = {
        alarms_types_id: Number(alarmTypeId),
        criticality: Number(form.criticidade),
        status: Number(form.status),
        active: Number(form.ativo),
        date_occurred: form.date,
      };

      console.log(data);

      const responseAlarms = await fetch(`${url}/alarms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          alarms_types_id: Number(alarmTypeId),
          criticality: form.criticidade,
          status: form.status,
          active: form.ativo,
          date_occurred: form.date,
        }),
      });

      if (!responseAlarms.ok) {
        console.log(responseAlarms);
        return responseAlarms;
      }

      const dataAlarms = await responseAlarms.json();

      console.log(dataAlarms);

      setForm({
        name: "",
        description: "",
        date: "",
        criticidade: "",
        status: "",
        ativo: "",
      });

      window.location.href = "/";
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.log(error.response.data.errors);
        alert("Erro de validação nos campos.");
      } else {
        console.error(error);
        alert("Erro ao cadastrar alarme.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#242424] text-white flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1F2937] p-8 rounded-xl shadow-lg w-full max-w-xl space-y-6"
      >
        <h2 className="flex items-center justify-center gap-2 text-2xl font-bold text-center text-white">
          Cadastrar Alarme
          <span>
            <Siren className="w-7 h-7 text-red-400 animate-pulse" />
          </span>
        </h2>

        <div>
          <label className="block text-sm font-semibold mb-1">Nome</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#14161a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite o nome do alarme"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Descrição</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 bg-[#14161a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite a descrição"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Data da Ocorrência
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#14161a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Criticidade
            </label>
            <select
              name="criticidade"
              value={form.criticidade}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#14161a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Selecione</option>
              <option value="0">Info</option>
              <option value="1">Baixo</option>
              <option value="2">Medio</option>
              <option value="3">Alto</option>
              <option value="4">Crítico</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#14161a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Selecione</option>
              <option value="1">Aberto</option>
              <option value="2">Em Andamento</option>
              <option value="0">Fechado</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Ativo</label>
            <select
              name="ativo"
              value={form.ativo}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#14161a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Selecione</option>
              <option value="1">Ativo</option>
              <option value="0">Desativado</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 text-center pt-4">
          <a
            href="/"
            className="flex gap-2 bg-red-500 hover:bg-red-600 text-white hover:text-slate-300 transition-colors px-6 py-2 rounded-md font-semibold"
          >
            <Undo2 className="w-5" />
            Cancelar
          </a>

          <button
            type="submit"
            className="flex gap-1.5 font-normal bg-gray-700 hover:bg-gray-500 duration-300 text-white hover:text-slate-200 py-2 px-4 rounded-lg transition"
          >
            Salvar
            <Check className="w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAlarmPage;
