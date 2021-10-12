const DEVICE_DETECT = "common/DEVICE_DETECT";


export const actionDeviceDetect = (deviceKind)=>({
	type:DEVICE_DETECT,
	device:deviceKind,
})


const initalState ={
	device: "",
}

const deviceDetect = (state=initalState,action)=>{
	switch(action.type){
		case DEVICE_DETECT:
			return{
				...state,
				device: action.device
			}
		default:
			return state;
	}
}

export default deviceDetect;