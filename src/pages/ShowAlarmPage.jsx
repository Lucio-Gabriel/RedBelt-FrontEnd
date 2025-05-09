function ShowAlarmPage() {
  return (
    <div className="min-h-screen bg-[#242424] text-white flex items-center justify-center p-4">
      <div className="bg-[#1F2937] p-8 rounded-xl shadow-lg w-full max-w-xl space-y-6">
        <h2 className="font-semibold text-2xl text-center text-white">
          Detalhes do alarme
        </h2>

        <div className="flex flex-col items-start justify-start space-y-3">
          <div className="text-start">
            <h3 className="text-white mb-1 font-semibold">Nome:</h3>

            <p>incidunt</p>
          </div>

          <div className="text-start">
            <h3 className="text-white mb-1 font-semibold">Descrição:</h3>

            <p>Eum beatae excepturi ut aliquam totam adipisci.</p>
          </div>

          <div className="text-start">
            <h3 className="text-white mb-1 font-semibold">
              Data da ocorrencia:
            </h3>

            <p>06/05/2025</p>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-16">
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-semibold">Criticidade</h3>

            <p className="px-3 py-1 bg-blue-700 rounded-lg">Médio</p>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold">Status</h3>

            <p className="px-3 py-1 bg-blue-700 rounded-lg">Em Andamento</p>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold">Ativo</h3>

            <p className="px-3 py-1 bg-blue-700 rounded-lg">Desativado</p>
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
