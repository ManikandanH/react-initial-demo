import React, { useEffect, useState } from 'react'


// class Sample extends React.Component {
//     state = {
//         currentScreen: 'desktop',
//     }

//     componentDidMount() {
//         console.log('COMPONENTDID_MOUNT')
//         window.addEventListener('resize', this.handleResize)
//     }

// componentDidUpdate() {
//     console.log('COMPONENTDID_UPDATE')
// }

//     // shouldComponentUpdate(previousProps, nextState) {
//     //     if (this.state.age !== nextState.age) {
//     //         return true
//     //     } else {
//     //         return false
//     //     }
//     // } // return true or false

//     componentWillUnmount() {
//         console.log('COMPONENTWILL_UNMOUNT')
//         window.removeEventListener('resize', this.handleResize)
//     }

// handleResize = () => {
//     console.log('HANDLERESIZE')

//     if (window.innerWidth < 768) {
//         this.setState({
//             currentScreen: 'mobile'
//         })
//     }
// }

//     render() {
//         const { name } = this.props
//         return (
//             <div>
//                 {this.state.currentScreen}
//                 <br />
//                 {name}
//             </div>
//         )
//     }

// }


function Sample(props) {
    const [currentScreen, setCurrentScreen] = useState('desktop')
    const [name, setName] = useState(props.name)

    const useEffectFunction = () => {
        console.log('COMPONENTDIDMOUNT_USEEFFECT')
        window.addEventListener('resize', handleResize)

        return function () {
            console.log('COMPONENTUNMOUNT_USEEFFECT')
            // window.removeEventListener('resize')
        }
    }

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setCurrentScreen('mobile')
        } else {
            setCurrentScreen('desktop')
        }
    }

    function useEffectUpdateFunction() {
        console.log('COMPONENTDIDUPDATE_USEEFFECT')
    }

    // const useEffectUpdateFunction = () => {

    // }

    function useUpdateNames() {
        setName(props.name)
    }

    useEffect(useEffectFunction, [])  //ComponentDidMount //first argument mandatory //second argument optional

    useEffect(useEffectUpdateFunction, [currentScreen])

    useEffect(useUpdateNames, [props.name])

    //passing function as argument called as callback
    console.log('COMPONENTRENDERED')
    return (
        <div>
            {currentScreen}
            <br />
            {name}
        </div>
    )
}


export default Sample
// currentState = {
//     name: 'Mani'
// }

// nextState = {
//     name: 'Mani'
// }

// function Sample(props){
//     const { name } = props
//     const [age, setAge] = useState(112)

//     setAge(123123)
//     return(
//         <div>
//             {/* {this.state.currentScreen} */}
//             {name}
//         </div>
//     )
// }


// function sample(argu1, argu2) {
//     argu1()
// }

// sample(() => {
//     console.log('Manikandan')
// }, 123)

