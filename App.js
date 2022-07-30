const Pet = (props) => {
  return React.createElement('div', { class: 'skillsList' }, [
    React.createElement('li', {}, props.name),
    React.createElement('li', {}, props.animal),
    React.createElement('li', {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement('a', { class: 'square squareSkills' }, [
    React.createElement(Pet, {
      name: '⚙️ My Engineer Skills',
      animal: 'Automation Engineer',
      breed: 'HMI/SCADA',
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('style-4'));
