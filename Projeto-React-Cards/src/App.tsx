import './App.css';
import ProfileCard from './components/ProfileCards';

function App() {
  const profilesData = [
    {   
        id: 1,
        imageUrl: 'https://avatars.githubusercontent.com/u/109917681?v=4',
        name: 'David Almeida Chaves',
        idade: 22,
        hobbie: "Imprimir peças 3D",
        curso: "Engenharia de Software",
        gitHubLink: "https://github.com/davidchaves3"},
    {
        id: 2,
        imageUrl: 'https://avatars.githubusercontent.com/u/159586908?v=4',
        name: 'Lucas da Silva Nascimento',
        idade: 21,
        hobbie: "Estudar criação de jogos",
        curso: "Ciência da Computação",
        gitHubLink: "https://github.com/davidchaves3"}
];

  return (
    <div className="App">
      <h1>EcoNet - Desenvolvedores</h1>
      <div className="profiles-container">
        {profilesData.map(profile => (
          <ProfileCard
            key={profile.id} 
            name={profile.name}
            idade={profile.idade}
            hobbie={profile.hobbie}
            curso={profile.curso}
            imageUrl={profile.imageUrl}
            gitHubLink={profile.gitHubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default App;