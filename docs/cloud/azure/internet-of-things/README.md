# 10. Internet of Things: allowed sub-pages

Follows `../README.md`. Figure on `index.md`: classification (see `../README.md`). Source: [Introduction to Azure IoT](https://learn.microsoft.com/en-us/azure/iot/iot-introduction) (its key groups of components: devices, cloud services and edge runtime).

## Sub-pages

| No. | File | Title (group name in the figure) | Sources | Allowed sections (H2 = the parts in the figure, in figure order) |
|---|---|---|---|---|
| 10.1 | `iot-devices.md` | IoT devices | [Introduction to Azure IoT: IoT device categories](https://learn.microsoft.com/en-us/azure/iot/iot-introduction#iot-device-categories) | 10.1.1 Cloud-connected device, 10.1.2 Edge-connected device, 10.1.3 Protocol-specific device |
| 10.2 | `iot-cloud-services.md` | IoT cloud services | [Introduction to Azure IoT: IoT services comparisons](https://learn.microsoft.com/en-us/azure/iot/iot-introduction#iot-services-comparisons) | 10.2.1 Azure IoT Hub, 10.2.2 Device Provisioning Service, 10.2.3 Device Update for IoT Hub, 10.2.4 Azure Digital Twins, 10.2.5 Azure Device Registry, 10.2.6 Azure IoT Central |
| 10.3 | `edge-runtime.md` | Edge runtime | [Introduction to Azure IoT: Edge runtime](https://learn.microsoft.com/en-us/azure/iot/iot-introduction#edge-runtime); [What is Azure IoT Edge](https://learn.microsoft.com/en-us/azure/iot-edge/about-iot-edge) | 10.3.1 Azure IoT Operations, 10.3.2 Azure IoT Edge |

The cloud-connected and edge-connected patterns are architecture figures on 10.2 and 10.3. IoT Hub details taught in CST8916 (device identity registry, device twin, device-to-cloud telemetry, cloud-to-device commands) are H3 inside 10.2.1 Azure IoT Hub. Microsoft Fabric, the shared data plane, belongs to 9. Analytics.
