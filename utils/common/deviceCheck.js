import { deviceType } from "react-device-detect";
import { useEffect, useState } from "react";

export const DeviceCheck = (pageProps) => {
	const [device, setDevice] = useState();
  
	useEffect(() => {
	  if (deviceType || deviceType !== undefined) {
		setDevice(deviceType);
	  }
	}, [device]);
  
	if (device || device !== undefined) {
	  return {
		...pageProps,
		device,
	  };
	} else {
	  return pageProps;
	}
  };