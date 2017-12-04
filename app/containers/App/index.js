import React from 'react';
import Subscriber from 'pg_coding_challenge_module';
import subscriberSchema from './subscriberSchema';
import pricingSchema from './pricingSchema';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      gender: '',
      hasAllergies: false,
      hasSleepApnea: false,
      hasHeartDisease: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  toggleCheckbox(event) {
    this.setState({
      [event.target.name]: !this.state[event.target.name],
    });
  }
  handleSubmit(event) {
    const params = {
      name: this.state.name,
      age: Number(this.state.age),
      gender: this.state.gender,
      hasAllergies: this.state.hasAllergies,
      hasSleepApnea: this.state.hasSleepApnea,
      hasHeartDisease: this.state.hasHeartDisease,
    };
    const s = new Subscriber({
      params,
      subscriberSchema,
      pricingSchema,
    });
    event.preventDefault();
    alert(`${s.name}, $${s.price().toFixed(2)}`);
    this.setState({
      name: '',
      age: '',
      gender: '',
      hasAllergies: false,
      hasSleepApnea: false,
      hasHeartDisease: false,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} display="block">
        <p>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          Age:
          <input
            type="number"
            name="age"
            min={18}
            value={this.state.age}
            onChange={this.handleChange}
          />
        </p>
        <p>
          Gender:
          <select
            value={this.state.gender}
            name="gender"
            onChange={this.handleChange}
          >
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </p>
        <p>
          Has Allergies:
          <input
            name="hasAllergies"
            type="checkbox"
            checked={this.state.hasAllergies}
            onChange={this.toggleCheckbox}
          />
        </p>
        <p>
          Has Sleep Apnea:
          <input
            name="hasSleepApnea"
            type="checkbox"
            checked={this.state.hasSleepApnea}
            onChange={this.toggleCheckbox}
          />
        </p>
        <p>
          Has Heart Disease:
          <input
            name="hasHeartDisease"
            type="checkbox"
            checked={this.state.hasHeartDisease}
            onChange={this.toggleCheckbox}
          />
        </p>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
