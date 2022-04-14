import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import HeartBeat from "../../assets/images/illustrations/heartbeat.svg";
import Oxygen from "../../assets/images/illustrations/oxymeter.svg";
import SmartWatch from "../../assets/images/illustrations/smart-watch.svg";
import Steps from "../../assets/images/illustrations/steps.svg";
import ThermometerGun from "../../assets/images/illustrations/thermometer.svg";
import WeightScale from "../../assets/images/illustrations/weight-scale.svg";
import ResidentHealthInfo from "../layouts/ResidentAnalysis/ResidentHealthInfo";
import ResidentInfo from "../layouts/ResidentAnalysis/ResidentInfo";

const ResidentAnalysisScreen = ({ setTitle }) => {
    const selectedDate = useSelector(state => state.calendarReducer.selectedDate);

    const vitalDataByDate = {
        18: [
            {
                vitalName: "Resident Activity",
                vitalValue: "120",
                vitalImage: SmartWatch,
            },
            {
                vitalName: "Blood Pressure",
                vitalValue: "110/145",
                vitalImage: SmartWatch,
            },
            {
                vitalName: "Heart Beat",
                vitalValue: "120",
                vitalUnit: "bps",
                vitalImage: HeartBeat,
            },
            {
                vitalName: "Steps",
                vitalValue: "2250",
                vitalImage: Steps,
            },
            {
                vitalName: "Weight",
                vitalValue: "75",
                vitalUnit: "kg",
                vitalImage: WeightScale,
            },
            {
                vitalName: "Temperature",
                vitalValue: "36.5",
                vitalUnit: "°C",
                vitalImage: ThermometerGun,
            },
            {
                vitalName: "SpO2",
                vitalValue: "96",
                vitalUnit: "%",
                vitalImage: Oxygen,
            },
        ],
        19: [
            {
                vitalName: "Resident Activity",
                vitalValue: "115",
                vitalImage: SmartWatch,
            },
            {
                vitalName: "Blood Pressure",
                vitalValue: "107/149",
                vitalImage: SmartWatch,
            },
            {
                vitalName: "Heart Beat",
                vitalValue: "117",
                vitalUnit: "bps",
                vitalImage: HeartBeat,
            },
            {
                vitalName: "Steps",
                vitalValue: "2053",
                vitalImage: Steps,
            },
            {
                vitalName: "Weight",
                vitalValue: "76",
                vitalUnit: "kg",
                vitalImage: WeightScale,
            },
            {
                vitalName: "Temperature",
                vitalValue: "36.8",
                vitalUnit: "°C",
                vitalImage: ThermometerGun,
            },
            {
                vitalName: "SpO2",
                vitalValue: "98",
                vitalUnit: "%",
                vitalImage: Oxygen,
            },
        ],
        20: [
            {
                vitalName: "Resident Activity",
                vitalValue: "118",
                vitalImage: SmartWatch,
            },
            {
                vitalName: "Blood Pressure",
                vitalValue: "123/162",
                vitalImage: SmartWatch,
            },
            {
                vitalName: "Heart Beat",
                vitalValue: "127",
                vitalUnit: "bps",
                vitalImage: HeartBeat,
            },
            {
                vitalName: "Steps",
                vitalValue: "2789",
                vitalImage: Steps,
            },
            {
                vitalName: "Weight",
                vitalValue: "75",
                vitalUnit: "kg",
                vitalImage: WeightScale,
            },
            {
                vitalName: "Temperature",
                vitalValue: "37.8",
                vitalUnit: "°C",
                vitalImage: ThermometerGun,
            },
            {
                vitalName: "SpO2",
                vitalValue: "94",
                vitalUnit: "%",
                vitalImage: Oxygen,
            },
        ],
        21: [
            {
                vitalName: "Resident Activity",
                vitalValue: "120",
                vitalImage: SmartWatch,
            },
            {
                vitalName: "Blood Pressure",
                vitalValue: "110/145",
                vitalImage: SmartWatch,
            },
            {
                vitalName: "Heart Beat",
                vitalValue: "120",
                vitalUnit: "bps",
                vitalImage: HeartBeat,
            },
            {
                vitalName: "Steps",
                vitalValue: "2250",
                vitalImage: Steps,
            },
            {
                vitalName: "Weight",
                vitalValue: "75",
                vitalUnit: "kg",
                vitalImage: WeightScale,
            },
            {
                vitalName: "Temperature",
                vitalValue: "36.5",
                vitalUnit: "°C",
                vitalImage: ThermometerGun,
            },
            {
                vitalName: "SpO2",
                vitalValue: "96",
                vitalUnit: "%",
                vitalImage: Oxygen,
            },
        ],
        22: [
            {
                vitalName: "Resident Activity",
                vitalValue: "115",
                vitalImage: SmartWatch,
            },
            {
                vitalName: "Blood Pressure",
                vitalValue: "107/149",
                vitalImage: SmartWatch,
            },
            {
                vitalName: "Heart Beat",
                vitalValue: "117",
                vitalUnit: "bps",
                vitalImage: HeartBeat,
            },
            {
                vitalName: "Steps",
                vitalValue: "2053",
                vitalImage: Steps,
            },
            {
                vitalName: "Weight",
                vitalValue: "76",
                vitalUnit: "kg",
                vitalImage: WeightScale,
            },
            {
                vitalName: "Temperature",
                vitalValue: "36.8",
                vitalUnit: "°C",
                vitalImage: ThermometerGun,
            },
            {
                vitalName: "SpO2",
                vitalValue: "98",
                vitalUnit: "%",
                vitalImage: Oxygen,
            },
        ],
        23: [
            {
                vitalName: "Resident Activity",
                vitalValue: "118",
                vitalImage: SmartWatch,
            },
            {
                vitalName: "Blood Pressure",
                vitalValue: "123/162",
                vitalImage: SmartWatch,
            },
            {
                vitalName: "Heart Beat",
                vitalValue: "127",
                vitalUnit: "bps",
                vitalImage: HeartBeat,
            },
            {
                vitalName: "Steps",
                vitalValue: "2789",
                vitalImage: Steps,
            },
            {
                vitalName: "Weight",
                vitalValue: "75",
                vitalUnit: "kg",
                vitalImage: WeightScale,
            },
            {
                vitalName: "Temperature",
                vitalValue: "37.8",
                vitalUnit: "°C",
                vitalImage: ThermometerGun,
            },
            {
                vitalName: "SpO2",
                vitalValue: "94",
                vitalUnit: "%",
                vitalImage: Oxygen,
            },
        ],
        24: [
            {
                vitalName: "Resident Activity",
                vitalValue: "120",
                vitalImage: SmartWatch,
            },
            {
                vitalName: "Blood Pressure",
                vitalValue: "110/145",
                vitalImage: SmartWatch,
            },
            {
                vitalName: "Heart Beat",
                vitalValue: "120",
                vitalUnit: "bps",
                vitalImage: HeartBeat,
            },
            {
                vitalName: "Steps",
                vitalValue: "2250",
                vitalImage: Steps,
            },
            {
                vitalName: "Weight",
                vitalValue: "75",
                vitalUnit: "kg",
                vitalImage: WeightScale,
            },
            {
                vitalName: "Temperature",
                vitalValue: "36.5",
                vitalUnit: "°C",
                vitalImage: ThermometerGun,
            },
            {
                vitalName: "SpO2",
                vitalValue: "96",
                vitalUnit: "%",
                vitalImage: Oxygen,
            },
        ],
    }

    const data = [
        {
            vitalName: "Resident Activity",
            vitalValue: "120",
            vitalImage: SmartWatch,
        },
        {
            vitalName: "Blood Pressure",
            vitalValue: "110/145",
            vitalImage: SmartWatch,
        },
        {
            vitalName: "Heart Beat",
            vitalValue: "120",
            vitalUnit: "bps",
            vitalImage: HeartBeat,
        },
        {
            vitalName: "Steps",
            vitalValue: "2250",
            vitalImage: Steps,
        },
        {
            vitalName: "Weight",
            vitalValue: "75",
            vitalUnit: "kg",
            vitalImage: WeightScale,
        },
        {
            vitalName: "Temperature",
            vitalValue: "36.5",
            vitalUnit: "°C",
            vitalImage: ThermometerGun,
        },
        {
            vitalName: "SpO2",
            vitalValue: "96",
            vitalUnit: "%",
            vitalImage: Oxygen,
        },
    ];
    const [selectedVitalInfoIndex, setSelectedVitalInfoIndex] = React.useState(0);

    React.useEffect(() => {
        if (setTitle) {
            setTitle("Resident Analysis");
        }
    }, [setTitle]);

    const handleSelectedVitalInfoIndex = index => () => {
        setSelectedVitalInfoIndex(index);
        console.log('datasets', index)
    };

    return (
        <Container fluid>
            <ResidentInfo
                selectedVitalInfoIndex={selectedVitalInfoIndex}
                handleSelectedVitalInfoIndex={handleSelectedVitalInfoIndex}
                data={vitalDataByDate[selectedDate]}
            />
            <ResidentHealthInfo
                handleSelectedVitalInfoIndex={handleSelectedVitalInfoIndex}
                selectedVitalInfoIndex={selectedVitalInfoIndex}
                cardData={vitalDataByDate[selectedDate]}
            />
        </Container>
    );
};

export default ResidentAnalysisScreen;
