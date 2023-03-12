import React, {useContext, useState} from 'react'



const Themecontext = React.createContext()

const Themeupdatecontext = React.createContext()


export function useTheme(){

    return useContext(Themecontext)
}

export function usethemeupdate(){

    return useContext(Themeupdatecontext)
}


export function Themeprovider({children}) {


    const [darktheme, setdarktheme] = useState(true)


    function toggletheme(){

      setdarktheme(prevdarktheme => !prevdarktheme)
    }


  return (


    <Themecontext.Provider value ={darktheme}>

      <Themeupdatecontext.Provider value ={toggletheme}>


        {children}


      </Themeupdatecontext.Provider>

    </Themecontext.Provider>



  )
}

