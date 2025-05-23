import React, { useEffect, useState } from "react";
import { Eye, Pencil, Trash, Plus, Siren } from "lucide-react";
import api from "../api/axios";
import DeleteModal from "./DeleteModal";
const url = import.meta.env.VITE_API_URL;

const Alarms = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [alarmIdToDelete, setAlarmIdToDelete] = useState(null);

  const [alarms, setAlarms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAlarms = async () => {
      try {
        const response = await api.get("/alarms");
        setAlarms(response.data.data);
      } catch (error) {
        setError("Erro ao obter mensagens!");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlarms();
  }, []);

  console.log(alarms);

  if (loading) {
    return <p>Carregando dados...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleSubmit = async (id) => {
    try {
      const responseAlarmTypes = await fetch(`${url}/alarms-types/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!responseAlarmTypes.ok) {
        console.log(responseAlarmTypes);
        return;
      }

      window.location.href = "/";
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.log(error.response.data.errors);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-full px-5">
      <h1 className="flex justify-center items-center text-2xl font-normal mb-4">
        Bem vindo ao sistema de
        <span className="flex gap-2 pl-2 font-semibold">
          Alarmes <Siren className="w-7 h-7 text-red-400 animate-pulse" />
        </span>
      </h1>

      <div className="flex items-end justify-end mb-3">
        <a
          href="/alarm-create"
          className="flex gap-1.5 font-normal bg-gray-700 hover:bg-gray-500 duration-300 text-white hover:text-slate-200 py-2 px-4 rounded-lg transition"
        >
          Criar Alarme <Plus />
        </a>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nome do alarme
              </th>
              <th scope="col" className="px-6 py-3">
                Criticidade
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Ativo
              </th>
              <th scope="col" className="px-6 py-3">
                Data da Ocorrência
              </th>
              <th scope="col" className="pl-14 px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {alarms.map((alarm, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <td className="text-white px-6 py-4">
                  {alarm.Tipo_de_Alarme?.Nome || "Nome"}
                </td>
                <td className="text-white px-6 py-4">{alarm.Criticidade}</td>
                <td className="text-white px-6 py-4">{alarm.Status}</td>
                <td className="text-white px-6 py-4">{alarm.Ativo}</td>
                <td className="text-white pl-14 px-6 py-4">
                  {alarm.data_da_ocorrencia}
                </td>
                <td className="text-white px-6 py-4">
                  <div className="flex items-center gap-4">
                    <a
                      href={`/alarm-show/${alarm.Tipo_de_Alarme.ID}`}
                      className="text-slate-300 hover:text-slate-400 duration-300"
                    >
                      <Eye className="w-5 h-5" />
                    </a>

                    <a
                      href={`/alarm-edit/${alarm.Tipo_de_Alarme.ID}`}
                      className="text-slate-300 hover:text-slate-400 duration-300"
                    >
                      <Pencil className="w-5 h-5" />
                    </a>
                    <button
                      onClick={() => {
                        setAlarmIdToDelete(alarm.Tipo_de_Alarme.ID);
                        setModalOpen(true);
                      }}
                      className="text-slate-300 bg-transparent hover:text-slate-400 hover:border-none duration-300"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <DeleteModal
          isOpen={isModalOpen}
          onClose={() => {
            setModalOpen(false);
            setAlarmIdToDelete(null);
          }}
          onConfirm={() => {
            if (alarmIdToDelete) {
              handleSubmit(alarmIdToDelete);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Alarms;
