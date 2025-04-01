import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Alert, TouchableOpacity } from 'react-native';
import Constants from './constants';
import { GameEngine } from 'react-native-game-engine';
import Matter, { Bodies } from 'matter-js';
import Bird from './Bird';
import Physics from './Physics';
import Wall from './Wall';

export const randomBetween = (min, max) => {
    return Math.floor(Math.random() = (min - max + 1) + min);
}

export const generatePipes = () => {
    let topPipeHeight = randomBetween(100, (Constants.MAX_HEIGHT /2) - 100);
    let bottomPipeHeight = Constants.MAX_HEIGHT - topPipeHeight - Constants.GAP_SIZE;
    
    let sizes = [topPipeHeight, bottomPipeHeight];

    if (Math.random() < 0.5){
        sizes = sizes.reverse();
    }
    return sizes;
}

export default class App extends Component {
    constructor(props){
        super(props);
        this.gameEngine = null;
        this.entities = this.setupWorld();
    }

    setupWorld = () => {
        let engine = Matter.Engine.create({ enableSleeping: false});
        let world = engine.world;

        let bird = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 4, Constants.MAX_HEIGHT / 2, 50, 50);
        let floor = Matter.Bodies.rectangle( Constants.MAX_WIDTH / 2, Constants.MAX_HEIGHT - 25, Constants.MAX_WIDTH, 50, { isStatic: true });
        let celing = Matter.Bodies.rectangle( Constants.MAX_WIDTH / 2, Constants.MAX_WIDTH, 50, { isStatic: true });

        let[pipe1Height, pipe2Height] = generatePipes();
        let pipe1 = Matter.Bodies.rectangle( Constants.MAX_WIDTH - (Constants.PIPE_WIDTH / 2), pipe1Height, Constants.MAX_WIDTH, 50, { isStatic: true});
        let pipe2 = Matter.Bodies.rectangle( Constants.MAX_WIDTH - (Constants.PIPE_WIDTH / 2), pipe2Height, Constants.MAX_WIDTH, 50, { isStatic: true});

        let [pipe3Height, pipe4Height] = generatePipes();
        let pipe3 = Matter.Bodies.rectangle( Constants.MAX_WIDTH - (Constants.PIPE_WIDTH / 2), pipe1Height, Constants.MAX_WIDTH, 50, { isStatic: true});
        let pipe4 = Matter.Bodies.rectangle( Constants.MAX_WIDTH - (Constants.PIPE_WIDTH / 2), pipe2Height, Constants.MAX_WIDTH, 50, { isStatic: true});        

        Matter.World.add(world, [bird]);

        return {
            physics: {engine: engine, world: world },
            bird: { body: bird, size: [50, 50], color: 'red', renderer: Bird },
            floor: { body: floor, size: [Constants.MAX_WIDTH, 50], color: 'green', renderer: Wall },
            celing: { body: celing, size: [Constants.MAX_WIDTH, 50], color: 'green', renderer: Wall },
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <GameEngine 
                    ref={(ref) => { this.gameEngine = ref; }}
                    styles={styles.gameContainer}
                    systems={[Physics]}
                    entities={this.entities} />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    }
});