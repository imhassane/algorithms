class DLink {
    constructor(node, mass) {
        this.node = node;
        this.mass = mass;
    }
}

class DNode {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.neighbors = [];
    }

    addNeighbor(node, mass) {
        this.neighbors.push(new DLink(node, mass));
    }
}

let paris = new DNode("Paris",      500, 250);
let brest = new DNode("Brest",      100, 150);
let lille = new DNode("Lille",      500, 80);
let reims = new DNode("Reims",      800, 200);
let quimp = new DNode("Quimper",    150, 200);
let marse = new DNode("Marseille",  550, 550);
let nice  = new DNode("Nice",       650, 450);
let lyon  = new DNode("Lyon",       200, 400);

brest.addNeighbor(paris, 50);
brest.addNeighbor(quimp, 8);
brest.addNeighbor(lille, 60);
brest.addNeighbor(marse, 130);
paris.addNeighbor(reims, 28);
paris.addNeighbor(lille, 20);
paris.addNeighbor(marse, 100);
lille.addNeighbor(reims, 12);
quimp.addNeighbor(paris, 45);
quimp.addNeighbor(marse, 120);
reims.addNeighbor(nice,  70);
nice.addNeighbor(marse, 30);
quimp.addNeighbor(lyon, 50);
lyon.addNeighbor(marse, 50);

const nodes = [];
nodes.push(brest);
nodes.push(paris);
nodes.push(lille);
nodes.push(marse);
nodes.push(quimp);
nodes.push(reims);
nodes.push(nice);
nodes.push(lyon);

const state = {
    nodes: nodes,
};

const actions = {};

const mutations = {
    setNodes: (state, nodes) => state.nodes = nodes,
};


export default { state, actions, mutations };
