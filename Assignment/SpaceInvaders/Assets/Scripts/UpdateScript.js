#pragma strict

function Update(){
	if(Input.GetKey("escape")){
		Time.timeScale = 0.0;
		GetComponent(PauseMenu).enabled = true;
	}
	if(Input.GetKey("r")){
		Time.timeScale = 1.0;
		GetComponent(PauseMenu).enabled = false;
	}
}

function OnGUI() {
	GUI.color = Color.blue;	
	GUI.skin.label.alignment = TextAnchor.MiddleCenter;
	GUI.skin.label.fontSize = 12;
	GUI.skin.label.fontStyle = FontStyle.Bold;
	GUI.Label(new Rect(10, Screen.height/ 4f + 320f, 100, 50), "ESC for pause");

}