import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Rizwan'
        }
        console.log('LifeCycleA Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = ()=>{
        this.setState({
            name: 'Codevolution'
        })
    }

    render() {
        console.log('LifecycleA render')
        return (
            <>
            <div>LifeCycle A</div>
            <button onClick= {this.changeState}>Change State</button>
            <LifecycleB />
            </>
        )
        
    }
}

export default LifeCycleA
