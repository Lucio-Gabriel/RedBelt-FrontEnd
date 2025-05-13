import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const url = import.meta.env.VITE_API_URL;

function ShowAlarmPage() {
  const { id } = useParams();
  const [alarm, setAlarm] = useState(null);
  useEffect(() => {
    async function fetchAlarm() {
      try {
        const response = await fetch(`${url}/alarms/${id}}`);
        const data = await response.json();

        setAlarm(data.data);
      } catch (error) {
        console.error("Erro ao buscar alarme:", error);
      }
    }

    fetchAlarm();
  }, [id]);

  if (!alarm) {
    return <div className="text-white">Caarregando...</div>;
  }

  return (
    <div className="min-h-screen bg-[#242424] text-white flex items-center justify-center p-4">
      <div className="bg-[#1F2937] p-8 rounded-xl shadow-lg w-full max-w-xl space-y-6">
        <h2 className="font-semibold text-2xl text-center text-white">
          Detalhes do alarme
        </h2>

        <div className="flex flex-col items-start justify-start space-y-3">
          <div className="text-start">
            <h3 className="text-white mb-1 font-semibold">Nome:</h3>
            <p>{alarm.Tipo_de_Alarme.Nome}</p>
          </div>

          <div className="text-start">
            <h3 className="text-white mb-1 font-semibold">Descrição:</h3>
            <p>{alarm.Tipo_de_Alarme.Descricao}</p>
          </div>

          <div className="text-start">
            <h3 className="text-white mb-1 font-semibold">
              Data da ocorrência:
            </h3>
            <p>{alarm.data_da_ocorrencia}</p>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-16">
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-semibold">Criticidade</h3>
            <p className="px-3 py-1 bg-blue-700 rounded-lg">
              {alarm.Criticidade}
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold">Status</h3>
            <p className="px-3 py-1 bg-blue-700 rounded-lg">{alarm.Status}</p>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold">Ativo</h3>
            <p className="px-3 py-1 bg-blue-700 rounded-lg">{alarm.Ativo}</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <a
            href="/"
            className="flex gap-1.5 font-normal bg-gray-700 hover:bg-gray-500 duration-300 text-white hover:text-slate-200 py-2 px-4 rounded-lg transition"
          >
            Voltar
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShowAlarmPage;
