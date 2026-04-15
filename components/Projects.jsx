function Projects() {
  const projetos = [
    {
      nome: "Agenda Diária",
      descricao: "Aplicação para organização de tarefas do dia a dia."
    },
    {
      nome: "App Antiansiedade",
      descricao: "Projeto voltado para controle emocional e bem-estar."
    }
  ];

  return (
    <section>
      <h2>Meus Projetos</h2>
      {projetos.map((projeto, index) => (
        <div key={index}>
          <h3>{projeto.nome}</h3>
          <p>{projeto.descricao}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
