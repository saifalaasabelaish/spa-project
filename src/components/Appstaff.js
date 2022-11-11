import './App.css';
import Card from './component/Card';


function App() {
  return (
    <section className='main'>
    <h2> Spa Member</h2>
    <div className="container">
    
      <Card name=" James mark" desc="Manager" src="./team1.jpeg"  />
      <Card name=" Yasmeen ali" desc="Founder" src="./yasmeen.webp"/>
      <Card name=" Kareem ahmad" desc="Skin doctor" src="./team2.jpeg"/>
      
      </div>
     </section>
  );
}

export default App;