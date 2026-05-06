gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDplayerObjects1= [];
gdjs.Untitled_32sceneCode.GDplayerObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2= [];
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergySparksObjects1= [];
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergySparksObjects2= [];
gdjs.Untitled_32sceneCode.GDBasicExplosionSmoothObjects1= [];
gdjs.Untitled_32sceneCode.GDBasicExplosionSmoothObjects2= [];
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergyObjects1= [];
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergyObjects2= [];
gdjs.Untitled_32sceneCode.GDLightningTextureObjects1= [];
gdjs.Untitled_32sceneCode.GDLightningTextureObjects2= [];
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergySparks2Objects1= [];
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergySparks2Objects2= [];
gdjs.Untitled_32sceneCode.GDBasicExplosionSmooth2Objects1= [];
gdjs.Untitled_32sceneCode.GDBasicExplosionSmooth2Objects2= [];
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergy2Objects1= [];
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergy2Objects2= [];
gdjs.Untitled_32sceneCode.GDLightningTexture2Objects1= [];
gdjs.Untitled_32sceneCode.GDLightningTexture2Objects2= [];
gdjs.Untitled_32sceneCode.GDrsObjects1= [];
gdjs.Untitled_32sceneCode.GDrsObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite4Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite4Objects2= [];
gdjs.Untitled_32sceneCode.GDscoreObjects1= [];
gdjs.Untitled_32sceneCode.GDscoreObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Untitled_32sceneCode.GDplayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Untitled_32sceneCode.GDNewSprite2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Untitled_32sceneCode.GDNewSprite3Objects1});
gdjs.Untitled_32sceneCode.asyncCallback9746604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(9746604, gdjs.Untitled_32sceneCode.asyncCallback9746604);
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9746604(runtimeScene, asyncObjectsList)), 9746604, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Untitled_32sceneCode.GDplayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32sceneCode.GDNewSpriteObjects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32sceneCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].setPosition(40,520);
}
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(true);
variables._declare("canshoot", variable);
}
gdjs.Untitled_32sceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite3Objects1Objects, gdjs.evtTools.input.getTouchX(runtimeScene, 1, "", 0), gdjs.evtTools.input.getTouchY(runtimeScene, 1, "", 0), "");
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}
gdjs.Untitled_32sceneCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "lol", 0.1, null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LightningTexture"), gdjs.Untitled_32sceneCode.GDLightningTextureObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLightningTextureObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLightningTextureObjects1[i].setPosition((( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getPointX("")),(( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getPointY("")));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].addPolarForce(90, -(350), 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].addPolarForce(-(180), 300, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].addPolarForce(180, -(200), 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects1Objects, "Physics2", gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Untitled_32sceneCode.GDNewSprite3Objects1);
/* Reuse gdjs.Untitled_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSprite3Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].setPosition(40,520);
}
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(15);
variables._declare("blocks_left", variable);
}
gdjs.Untitled_32sceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Untitled_32sceneCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSprite3Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].setPosition(40,520);
}
}
}
gdjs.Untitled_32sceneCode.localVariables.pop();

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDplayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionSmoothObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionSmoothObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLightningTextureObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLightningTextureObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergySparks2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergySparks2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionSmooth2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionSmooth2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergy2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergy2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLightningTexture2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLightningTexture2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDrsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDrsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDscoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDscoreObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionSmoothObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionSmoothObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLightningTextureObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLightningTextureObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergySparks2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergySparks2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionSmooth2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionSmooth2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergy2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergy2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLightningTexture2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLightningTexture2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDrsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDrsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDscoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDscoreObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
