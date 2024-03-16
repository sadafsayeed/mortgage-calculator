import React from 'react'
import SliderComponent from './common/SliderComponent'


const SliderSelect = ({data, setData}) => {
    return (
        <React.Fragment>
            <SliderComponent
                label="Home Value"
                unit = "$"
                top_num = {data.homeValue}
                min={1000}
                max={10000}
                defaultValue={data.homeValue}
                value={data.homeValue}
                step={100}
                onChange={(e, value) => setData({
                    ...data,
                    downPayment: value*0.2,
                    loanAmount: value*0.8,
                    homeValue: value
                })}
            />
            <SliderComponent
                label="Down Payment"
                unit = "$"
                top_num = {data.downPayment}
                min={0}
                max={data.homeValue}
                defaultValue={data.downPayment}
                value={data.downPayment}
                step={100}
                onChange={(e, value) => setData({
                    ...data, 
                    loanAmount:(data.homeValue - value),
                    downPayment: value})}
            />
            <SliderComponent
                label="Loan Amount"
                unit = "$"
                top_num = {data.loanAmount}
                min={0}
                max={data.homeValue}
                defaultValue={data.loanAmount}
                value={data.loanAmount}
                step={100}
                onChange={(e, value) => setData({
                    ...data, 
                    downPayment:(data.homeValue-value),
                    loanAmount:value})}
            />

            <SliderComponent
                label="Interest Rate"
                unit = "%"
                top_num = {data.interestRate}
                min={0}
                max={20}
                defaultValue={data.interestRate}
                value={data.interestRate}
                step={0.5}
                onChange={(e, value) => setData({...data, interestRate:value})}
            />  

        </React.Fragment>
    )
}

export default SliderSelect