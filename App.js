import React, { useState, useEffect } from 'react'
import { ImageBackground } from 'react-native'
import styled from 'styled-components/native'

import backgroundImage from './assets/images/gtImage.jpg'

const Container = styled.View`
flex: 1;
background-color: white;
align-items: center;
`
const Containerr = styled.ImageBackground`
flex 1;
height: 100%;
`

const Header = styled.View`
  background-color: black;  
  justify-content: center;
  align-items: center;
  width: 100%
  border: 2px solid black;  
  padding: 15px; 
  flex: 1;
  `

  const Title = styled.Text`
  font-size: 36px;
  color: white;
  margin: 20px;
  `
  const RandomRecipeBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  height: 60px;
  border-radius: 25px; 
  padding: 10px;
  border: 2px solid black;
  `

  const RecipeName = styled.Text`
  font-size: 24px;
  color: palevioletred;
  margin: 20px;
  `
  
  const RecipeText = styled.Text`
  font-size: 20px;
  color: black;  
  `
  
  const BtnText = styled.Text`
  font-size: 24px;
  color: black;
  `
  
  const RecipeContainer = styled.ScrollView`  
  flex: 4;  
  `
  const RecipeContainerStart = styled.View`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
  flex: 4;
  `

  const Footer = styled.View`
  flex: 1;
  background-color: black;  
  justify-content: center;
  align-items: center;
  width: 100%
  border: 2px solid black; 
  margin-top: 20px; 
  padding: 15px;  
  `

  const GtImg = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  `
  
  const App = () => {

    const getRandomRecipe = () => {
      return setGts(Math.floor(Math.random() * 31))           
    }     
    const [gts, setGts] = useState ()
    const [data, setData] = useState([])


  useEffect(() => { 
    fetch('https://api.edamam.com/search?q=gin&app_id=2e3ab8b1&app_key=616f91fa37bcccc85e74d8e8fa4a5078&from=0&to=30') 
    .then(data => data.json()) 
    .then(json => setData(json)) 
  }, [])
  
  if(gts === undefined){
  return(
    <Containerr source={backgroundImage}>
      <Header>
        <Title>GT-randomizer!</Title>        
      </Header>            
      <RecipeContainerStart >
          <RecipeText>Click the button below to get a nice gin&tonic recipe!</RecipeText>  
      </RecipeContainerStart>
      <Footer>
      <RandomRecipeBtn onPress={getRandomRecipe}>
        <BtnText>Random GT</BtnText>
      </RandomRecipeBtn>      
      </Footer>       
    </Containerr>
  )
}
  return (
    <Container>      
      <Header>
        <Title>GT-randomizer!</Title>        
      </Header>            
      <RecipeContainer>
          <Container>
          <RecipeName>{data.hits[gts].recipe.label}</RecipeName>
            <GtImg source={{ uri: data.hits[gts].recipe.image}}/>
            {data.hits[gts].recipe.ingredientLines.map((ing) => (
            <RecipeText key={ing} >{ing}</RecipeText>
            ))}             
            </Container>          
      </RecipeContainer>
      <Footer>
      <RandomRecipeBtn onPress={getRandomRecipe}>
        <BtnText>Random GT</BtnText>
      </RandomRecipeBtn>       
      </Footer>  
    </Container>      
  )
}

export default App