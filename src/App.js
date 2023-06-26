import './App.css';
import Progress from './components/progress/progress';
import InfoCard from './components/InfoCards/infoCard';
function App() {
  return (
    <>
    <Progress/>
    <div style={{display:"flex"}}>
      <InfoCard color="red" type="strength"></InfoCard>
      <InfoCard color="yellow" type="agility"></InfoCard>
      <InfoCard color="green" type="intelligence"></InfoCard>
    </div>
    
    </>
  );
}

export default App;

// To Do : 
// 1. add a timer for task to complete in day and keep it updating (like a clock )