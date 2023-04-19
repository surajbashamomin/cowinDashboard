// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'

class CowinDashboard extends Component {
  state = {cowinList: [], isLoading: true}

  componentDidMount() {
    this.getCowinData()
  }

  getCowinData = async () => {
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    const data = await response.json()
    console.log(data)
    const updateData = data.last_7_days_vaccination.map(eachItem => ({
      vaccineData: eachItem.vaccine_data,
      dose1: eachItem.dose_1,
      dose2: eachItem.dose_2,
    }))
    this.setState({cowinList: updateData, isLoading: false})
  }

  render() {
    const {cowinList, isLoading} = this.state
    console.log(cowinList)
    return (
      <div className="app-container">
        <div className="image-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <h1 className="main-heading">Co-WIN</h1>
        </div>
        <h1 className="heading">Co-WIN Vaccination in India</h1>
        <div className="bar-container">
          {isLoading ? (
            <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
          ) : (
            <VaccinationCoverage cowinList={cowinList} />
          )}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
