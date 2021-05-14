import React, {Component} from "react"
import {Text, TouchableOpacity, View, StyleSheet, Image, Alert} from "react-native"

export default class App extends React.Component{
  constructor(){
    super();

    this.state = {
      items: ["", "", "", "", "", "", "", "", ""],
      turn: 1
    }
  }

  getTile(index){
    if(this.state.items[index] === "X"){
      return <Image style={{width: 50, height: 50}} source={require("./assets/X.png")}/>
    }else{
      return <Image style={{width: 50, height: 50}} source={require("./assets/O.png")}/>
    }
  }

  checkVictory(tokenType){
    var items = this.state.items;
    var player = "";
    if(tokenType === "O"){
      player = "Player One"
    }else{
      player = "Player Two"
    }

    //First three are rows, next three are columns, final two are diagonal
    if((items[0] === tokenType && items[1] === tokenType && items[2] === tokenType) ||
    (items[3] === tokenType && items[4] === tokenType && items[5] === tokenType) ||
    (items[6] === tokenType && items[7] === tokenType && items[8] === tokenType) ||

    (items[0] === tokenType && items[3] === tokenType && items[6] === tokenType) ||
    (items[1] === tokenType && items[4] === tokenType && items[7] === tokenType) ||
    (items[2] === tokenType && items[5] === tokenType && items[8] === tokenType) ||

    (items[0] === tokenType && items[4] === tokenType && items[8] === tokenType) ||
    (items[6] === tokenType && items[4] === tokenType && items[2] === tokenType)){
      Alert.alert(player + " Wins!");
      this.setState({
        items: ["", "", "", "", "", "", "", "", ""]
      })
    }else if(items[0] !== "" && items[1] !== "" && items[2] !== ""
    && items[3] !== "" && items[4] !== "" && items[5] !== ""
    && items[6] !== "" && items[7] !== "" && items[8] !== ""){
      Alert.alert("Draw!");
      this.setState({
        items: ["", "", "", "", "", "", "", "", ""]
      })
    }
  }

  addToken = (index) => {
    var items = this.state.items;
    var token = "";
    if(items[index] !== "O" && items[index] !== "X"){
      if(this.state.turn === 1){
        items[index] = "O";
        token = "O";
      }else{
        items[index] = "X";
        token = "X"
      }

      this.setState({
        items: items,
        turn: this.state.turn * -1
      })

      this.checkVictory(token);
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.borders, {borderRightWidth: 7.5, borderBottomWidth: 7.5}]}
          onPress={
            ()=>{
              this.addToken(0)
            }
          }>
            <Text style={styles.clickableText}>
              {this.state.items[0] === ""
                ?<Image style={{width: 50, height: 50}} source={require("./assets/BlankTile.png")}/>
                :this.getTile(0)
              }
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.borders, {borderWidth: 7.5, borderTopWidth: 0}]}
          onPress={
            ()=>{
              this.addToken(1)
            }
          }>
            <Text style={styles.clickableText}>
            {this.state.items[1] === ""
                ?<Image style={{width: 50, height: 50}} source={require("./assets/BlankTile.png")}/>
                :this.getTile(1)
              }
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.borders, {borderLeftWidth: 7.5, borderBottomWidth: 7.5}]}
          onPress={
            ()=>{
              this.addToken(2)
            }
          }>
            {this.state.items[2] === ""
                ?<Image style={{width: 50, height: 50}} source={require("./assets/BlankTile.png")}/>
                :this.getTile(2)
              }
          </TouchableOpacity>
        </View>



        <View style={styles.row}>
          <TouchableOpacity style={[styles.borders, {borderWidth: 7.5, borderLeftWidth: 0}]}
          onPress={
            ()=>{
              this.addToken(3)
            }
          }>
            <Text style={styles.clickableText}>
            {this.state.items[3] === ""
                ?<Image style={{width: 50, height: 50}} source={require("./assets/BlankTile.png")}/>
                :this.getTile(3)
              }
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.borders, {borderWidth: 7.5}]}
          onPress={
            ()=>{
              this.addToken(4)
            }
          }>
            <Text style={styles.clickableText}>
              {this.state.items[4] === ""
                ?<Image style={{width: 50, height: 50}} source={require("./assets/BlankTile.png")}/>
                :this.getTile(4)
              }
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.borders, {borderWidth: 7.5, borderRightWidth: 0}]}
          onPress={
            ()=>{
              this.addToken(5)
            }
          }>
            {this.state.items[5] === ""
                ?<Image style={{width: 50, height: 50}} source={require("./assets/BlankTile.png")}/>
                :this.getTile(5)
              }
          </TouchableOpacity>
        </View>



        <View style={styles.row}>
          <TouchableOpacity style={[styles.borders, {borderRightWidth: 7.5, borderTopWidth: 7.5}]}
          onPress={
            ()=>{
              this.addToken(6)
            }
          }>
            <Text style={styles.clickableText}>
            {this.state.items[6] === ""
                ?<Image style={{width: 50, height: 50}} source={require("./assets/BlankTile.png")}/>
                :this.getTile(6)
              }
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.borders, {borderWidth: 7.5, borderBottomWidth: 0}]}
          onPress={
            ()=>{
              this.addToken(7)
            }
          }>
            <Text style={styles.clickableText}>
            {this.state.items[7] === ""
                ?<Image style={{width: 50, height: 50}} source={require("./assets/BlankTile.png")}/>
                :this.getTile(7)
              }
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.borders, {borderLeftWidth: 7.5, borderTopWidth: 7.5}]}
          onPress={
            ()=>{
              this.addToken(8)
            }
          }>
            {this.state.items[8] === ""
                ?<Image style={{width: 50, height: 50}} source={require("./assets/BlankTile.png")}/>
                :this.getTile(8)
              }
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  row:{
    flexDirection: "row"
  },
  clickableText:{
    fontSize: 40
  },
  borders:{
    padding: 10
  }
})