interface ProfileCardProps {
    key: number;
    imageUrl: string;
    name: string;
    idade: number;
    hobbie: string;
    curso: string;
    gitHubLink: string;
  }

  function ProfileCard({name, idade, hobbie, curso, imageUrl, gitHubLink}: ProfileCardProps) {
    return (
      <div className="card">
        <img src={imageUrl} alt={`Foto de ${name}`} className="card-img" />
        <h2>{name}</h2>
        <p><strong>Idade: </strong> {idade} anos</p>
        <p><strong>Hobbie:</strong> {hobbie}</p>
        <p><strong>Curso:</strong> {curso}</p>
        <p>Link para o <a href={gitHubLink}>GitHub</a></p>
      </div>
    );
  }
  
  export default ProfileCard;