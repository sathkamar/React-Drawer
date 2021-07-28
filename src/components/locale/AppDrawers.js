import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { LangContext } from '../../app/contexts/LangContext'
import { allLangString } from '../../app/constants/allLangString'
import LeftDrawer from './LeftDrawer'
import RightDrawer from './RightDrawer'
function AppDrawers() {

  const selectedLang = useSelector((state) => state.language.value);
  const [pageString, setPageStrings] = useState(allLangString.en)
  useEffect(() => {
    setPageStrings(allLangString[selectedLang])
    return () => {}
  }, [selectedLang])
  
  console.log(selectedLang)

  return (
    <>
      <LangContext.Provider value={{pageString, selectedLang }}>
        { selectedLang && selectedLang==="ar"? <RightDrawer /> : <LeftDrawer /> }
      </LangContext.Provider>
    </>
  )
}

export default AppDrawers
