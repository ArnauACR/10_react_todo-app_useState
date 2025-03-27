import Header from './components/Header';
import Subheader from './components/Subheader';
import ListContainer from './components/ListContainer';
import ListHeader from './components/ListHeader';
import ItemsList from './components/ItemsList';
import styles from './App.module.css';

const mockTodos = [
  {
    title: 'Buy groceries',
    description: 'Purchase milk, eggs, and bread from the supermarket.',
    status: 'pending',
  },
  {
    title: 'Finish project report',
    description: 'Complete the final draft of the quarterly report.',
    status: 'in progress',
  },
  {
    title: 'Call plumber',
    description: 'Fix the leaking sink in the kitchen.',
    status: 'pending',
  },
  {
    title: 'Schedule dentist appointment',
    description: 'Book a check-up for next week.',
    status: 'done',
  },
  {
    title: 'Workout',
    description: 'Go to the gym for an hour of cardio and strength training.',
    status: 'pending',
  },
];

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.app__header}>
        <Header />
        <Subheader subtitle="Todo List Manager" />
      </header>
      <main className={styles.app__main}>
        <ListContainer>
          <ListHeader content="Todo List" />
          <ItemsList itemsList={mockTodos} />
        </ListContainer>
      </main>
    </div>
  );
}

export default App;
