import _ from 'lodash';
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ResidentInsights from "./ResidentInsights";
import ResidentMedicalHealth from "./ResidentMedicalHealth";

const ResidentHealthInfo = ({ handleSelectedVitalInfoIndex, selectedVitalInfoIndex, cardData }) => {
    const selectedDate = useSelector(state => state.calendarReducer.selectedDate);
    const [data, setData] = React.useState([
        {
            datasets: [
                {
                    data: [11, 18, 5, 3, 1, 6],
                    hasGradient: true
                },
                {
                    data: [3, 4, 2, 1, 3, 2],
                    hasGradient: false
                },
            ],
            activenessDetails: {
                upAtNight: { value: 30, label: "30" },
                leftRoom: { value: 10, label: "10" },
                staffVisits: { value: 75, label: "75" },
                wakeUp: { value: 50, label: "8:00 AM" },
                breakfast: { value: 50, label: "9:00 AM" },
                hydration: { value: 10, label: "10:30 AM" },
            },
        },

        {
            datasets: [
                {
                    data: [15, 19, 15, 16, 17, 19],
                    hasGradient: true
                },
                {
                    data: [8, 9, 7, 9, 8, 10],
                    hasGradient: true
                },
            ],
            activenessDetails: {
                upAtNight: { value: 30, label: "30" },
                leftRoom: { value: 10, label: "10" },
                staffVisits: { value: 75, label: "75" },
                wakeUp: { value: 50, label: "8:00 AM" },
                breakfast: { value: 50, label: "9:00 AM" },
                hydration: { value: 10, label: "10:30 AM" },
            },
        },
        {
            datasets: [
                {
                    data: [12, 16, 8, 2, 1, 6],
                    hasGradient: true
                },
                {
                    data: [9, 2, 1, 15, 6, 8],
                    hasGradient: false
                },
            ],
            activenessDetails: {
                upAtNight: { value: 50, label: "5" },
                leftRoom: { value: 25, label: "8" },
                staffVisits: { value: 50, label: "5" },
                wakeUp: { value: 62, label: "7:35 AM" },
                breakfast: { value: 40, label: "8:53 AM" },
                hydration: { value: 80, label: "9:56 AM" },
            },
        },
        {
            datasets: [
                {
                    data: [2, 11, 5, 0, 6, 1],
                    hasGradient: true
                },
                {
                    data: [5, 4, 8, 11, 1, 10],
                    hasGradient: false
                },
            ],
            activenessDetails: {
                upAtNight: { value: 50, label: "6" },
                leftRoom: { value: 65, label: "3" },
                staffVisits: { value: 10, label: "0" },
                wakeUp: { value: 70, label: "9:09 AM" },
                breakfast: { value: 50, label: "10:26 AM" },
                hydration: { value: 50, label: "10:38 AM" },
            },
        },
        {
            datasets: [
                {
                    data: [1, 6, 5, 11, 13, 5],
                    hasGradient: true
                },
                {
                    data: [12, 1, 7, 5, 9, 3],
                    hasGradient: false
                },
            ],
            activenessDetails: {
                upAtNight: { value: 30, label: "14" },
                leftRoom: { value: 40, label: "2" },
                staffVisits: { value: 25, label: "1" },
                wakeUp: { value: 50, label: "8:00 AM" },
                breakfast: { value: 50, label: "9:18 AM" },
                hydration: { value: 50, label: "9:33 AM" },
            },
        },
        {
            datasets: [
                {
                    data: [17, 9, 8, 15, 12, 6],
                    hasGradient: true
                },
                {
                    data: [5, 12, 11, 6, 12, 7],
                    hasGradient: false
                },
            ],
            activenessDetails: {
                upAtNight: { value: 65, label: "4" },
                leftRoom: { value: 20, label: "5" },
                staffVisits: { value: 20, label: "3" },
                wakeUp: { value: 16, label: "9:07 AM" },
                breakfast: { value: 75, label: "9:23 AM" },
                hydration: { value: 50, label: "10:14 AM" },
            },
        },
        {
            datasets: [
                {
                    data: [3, 9, 5, 8, 1, 2],
                    hasGradient: true
                },
                {
                    data: [7, 4, 3, 12, 1],
                    hasGradient: false
                },
            ],
            activenessDetails: {
                upAtNight: { value: 60, label: "6" },
                leftRoom: { value: 80, label: "1" },
                staffVisits: { value: 50, label: "0" },
                wakeUp: { value: 10, label: "8:21 AM" },
                breakfast: { value: 90, label: "9:12 AM" },
                hydration: { value: 25, label: "9:25 AM" },
            },
        },
    ]);
    const dummyDataByDate = {
        18: [
            {
                datasets: [
                    {
                        data: [9, 19, 16, 8, 6, 3],
                        hasGradient: true
                    },
                    {
                        data: [5, 7, 6, 4, 10, 12],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "30" },
                    leftRoom: { value: 10, label: "10" },
                    staffVisits: { value: 75, label: "75" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:00 AM" },
                    hydration: { value: 10, label: "10:30 AM" },
                },
            },
            // for BP
            {
                datasets: [
                    {
                        data: [15, 19, 15, 16, 17, 19],
                        hasGradient: true
                    },
                    {
                        data: [8, 9, 7, 9, 8, 10],
                        hasGradient: true
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "30" },
                    leftRoom: { value: 10, label: "10" },
                    staffVisits: { value: 75, label: "75" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:00 AM" },
                    hydration: { value: 10, label: "10:30 AM" },
                },
            },
            // for Heart rate
            {
                datasets: [
                    {
                        data: [12, 16, 8, 2, 1, 6],
                        hasGradient: true
                    },
                    // {
                    //     data: [9, 2, 1, 15, 6, 8],
                    //     hasGradient: false
                    // },
                ],
                activenessDetails: {
                    upAtNight: { value: 50, label: "5" },
                    leftRoom: { value: 25, label: "8" },
                    staffVisits: { value: 50, label: "5" },
                    wakeUp: { value: 62, label: "7:35 AM" },
                    breakfast: { value: 40, label: "8:53 AM" },
                    hydration: { value: 80, label: "9:56 AM" },
                },
            },
            // for steps
            {
                datasets: [
                    {
                        data: [2, 11, 5, 0, 6, 1],
                        hasGradient: true
                    },
                    {
                        data: [5, 4, 8, 11, 1, 10],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 50, label: "6" },
                    leftRoom: { value: 65, label: "3" },
                    staffVisits: { value: 10, label: "0" },
                    wakeUp: { value: 70, label: "9:09 AM" },
                    breakfast: { value: 50, label: "10:26 AM" },
                    hydration: { value: 50, label: "10:38 AM" },
                },
            },
            // for weight
            {
                datasets: [
                    {
                        data: [1, 6, 5, 11, 13, 5],
                        hasGradient: true
                    },
                    {
                        data: [12, 1, 7, 5, 9, 3],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "14" },
                    leftRoom: { value: 40, label: "2" },
                    staffVisits: { value: 25, label: "1" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:18 AM" },
                    hydration: { value: 50, label: "9:33 AM" },
                },
            },
            // for temp
            {
                datasets: [
                    {
                        data: [17, 9, 8, 15, 12, 6],
                        hasGradient: true
                    },
                    {
                        data: [5, 12, 11, 6, 12, 7],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 65, label: "4" },
                    leftRoom: { value: 20, label: "5" },
                    staffVisits: { value: 20, label: "3" },
                    wakeUp: { value: 16, label: "9:07 AM" },
                    breakfast: { value: 75, label: "9:23 AM" },
                    hydration: { value: 50, label: "10:14 AM" },
                },
            },
            // for spO2
            {
                datasets: [
                    {
                        data: [3, 9, 5, 8, 1, 2],
                        hasGradient: true
                    },
                    {
                        data: [7, 4, 3, 12, 1, 6],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 60, label: "6" },
                    leftRoom: { value: 80, label: "1" },
                    staffVisits: { value: 50, label: "0" },
                    wakeUp: { value: 10, label: "8:21 AM" },
                    breakfast: { value: 90, label: "9:12 AM" },
                    hydration: { value: 25, label: "9:25 AM" },
                },
            },
        ],
        19: [
            {
                datasets: [
                    {
                        data: [10, 17, 6, 1, 5, 8],
                        hasGradient: true
                    },
                    {
                        data: [13, 11, 2, 5, 7, 12],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "30" },
                    leftRoom: { value: 10, label: "10" },
                    staffVisits: { value: 75, label: "75" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:00 AM" },
                    hydration: { value: 10, label: "10:30 AM" },
                },
            },

            // TODO - change values from here below

            // This is for blood pressure.. alter the data carefully
            {
                datasets: [
                    {
                        data: [12, 17, 19, 14, 18, 16],
                        hasGradient: true
                    },
                    {
                        data: [7, 9, 11, 8, 10, 10],
                        hasGradient: true
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "30" },
                    leftRoom: { value: 10, label: "10" },
                    staffVisits: { value: 75, label: "75" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:00 AM" },
                    hydration: { value: 10, label: "10:30 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [10, 9, 12, 6, 8, 11],
                        hasGradient: true
                    },
                    // {
                    //     data: [19, 5, 6, 16, 5, 18],
                    //     hasGradient: false
                    // },
                ],
                activenessDetails: {
                    upAtNight: { value: 50, label: "5" },
                    leftRoom: { value: 25, label: "8" },
                    staffVisits: { value: 50, label: "5" },
                    wakeUp: { value: 62, label: "7:35 AM" },
                    breakfast: { value: 40, label: "8:53 AM" },
                    hydration: { value: 80, label: "9:56 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [12, 1, 15, 10, 16, 11],
                        hasGradient: true
                    },
                    {
                        data: [15, 14, 18, 1, 11, 5],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 50, label: "6" },
                    leftRoom: { value: 65, label: "3" },
                    staffVisits: { value: 10, label: "0" },
                    wakeUp: { value: 70, label: "9:09 AM" },
                    breakfast: { value: 50, label: "10:26 AM" },
                    hydration: { value: 50, label: "10:38 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [6, 8, 15, 1, 8, 7],
                        hasGradient: true
                    },
                    {
                        data: [14, 10, 17, 7, 11, 1],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "14" },
                    leftRoom: { value: 40, label: "2" },
                    staffVisits: { value: 25, label: "1" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:18 AM" },
                    hydration: { value: 50, label: "9:33 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [7, 11, 12, 5, 6, 8],
                        hasGradient: true
                    },
                    {
                        data: [13, 11, 1, 4, 5, 17],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 65, label: "4" },
                    leftRoom: { value: 20, label: "5" },
                    staffVisits: { value: 20, label: "3" },
                    wakeUp: { value: 16, label: "9:07 AM" },
                    breakfast: { value: 75, label: "9:23 AM" },
                    hydration: { value: 50, label: "10:14 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [15, 3, 5, 9, 11, 12],
                        hasGradient: true
                    },
                    {
                        data: [17, 14, 13, 15, 9, 8],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 60, label: "6" },
                    leftRoom: { value: 80, label: "1" },
                    staffVisits: { value: 50, label: "0" },
                    wakeUp: { value: 10, label: "8:21 AM" },
                    breakfast: { value: 90, label: "9:12 AM" },
                    hydration: { value: 25, label: "9:25 AM" },
                },
            },
        ],
        20: [
            {
                datasets: [
                    {
                        data: [9, 7, 11, 10, 15, 6],
                        hasGradient: true
                    },
                    {
                        data: [15, 6, 12, 15, 18, 2],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "30" },
                    leftRoom: { value: 10, label: "10" },
                    staffVisits: { value: 75, label: "75" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:00 AM" },
                    hydration: { value: 10, label: "10:30 AM" },
                },
            },

            // TODO - change values from here below
            // This is for blood pressure.. alter the data carefully
            {
                datasets: [
                    {
                        data: [14, 16, 18, 15, 14, 13],
                        hasGradient: true
                    },
                    {
                        data: [9, 10, 12, 10, 9, 11],
                        hasGradient: true
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "30" },
                    leftRoom: { value: 10, label: "10" },
                    staffVisits: { value: 75, label: "75" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:00 AM" },
                    hydration: { value: 10, label: "10:30 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [10, 13, 12, 11, 12, 7],
                        hasGradient: true
                    },
                    // {
                    //     data: [8, 15, 6, 17, 15, 9],
                    //     hasGradient: false
                    // },
                ],
                activenessDetails: {
                    upAtNight: { value: 50, label: "5" },
                    leftRoom: { value: 25, label: "8" },
                    staffVisits: { value: 50, label: "5" },
                    wakeUp: { value: 62, label: "7:35 AM" },
                    breakfast: { value: 40, label: "8:53 AM" },
                    hydration: { value: 80, label: "9:56 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [14, 11, 5, 10, 8, 5],
                        hasGradient: true
                    },
                    {
                        data: [6, 7, 9, 8, 11, 5],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 50, label: "6" },
                    leftRoom: { value: 65, label: "3" },
                    staffVisits: { value: 10, label: "0" },
                    wakeUp: { value: 70, label: "9:09 AM" },
                    breakfast: { value: 50, label: "10:26 AM" },
                    hydration: { value: 50, label: "10:38 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [12, 18, 5, 7, 9, 13],
                        hasGradient: true
                    },
                    {
                        data: [16, 5, 3, 18, 4, 12],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "14" },
                    leftRoom: { value: 40, label: "2" },
                    staffVisits: { value: 25, label: "1" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:18 AM" },
                    hydration: { value: 50, label: "9:33 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [14, 6, 8, 12, 16, 9],
                        hasGradient: true
                    },
                    {
                        data: [7, 18, 9, 14, 2, 15],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 65, label: "4" },
                    leftRoom: { value: 20, label: "5" },
                    staffVisits: { value: 20, label: "3" },
                    wakeUp: { value: 16, label: "9:07 AM" },
                    breakfast: { value: 75, label: "9:23 AM" },
                    hydration: { value: 50, label: "10:14 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [6, 9, 11, 5, 14, 10],
                        hasGradient: true
                    },
                    {
                        data: [15, 9, 7, 6, 19, 15],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 60, label: "6" },
                    leftRoom: { value: 80, label: "1" },
                    staffVisits: { value: 50, label: "0" },
                    wakeUp: { value: 10, label: "8:21 AM" },
                    breakfast: { value: 90, label: "9:12 AM" },
                    hydration: { value: 25, label: "9:25 AM" },
                },
            },
        ],
        21: [
            {
                datasets: [
                    {
                        data: [11, 18, 5, 3, 1, 6],
                        hasGradient: true
                    },
                    {
                        data: [3, 4, 2, 1, 3, 2],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "30" },
                    leftRoom: { value: 10, label: "10" },
                    staffVisits: { value: 75, label: "75" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:00 AM" },
                    hydration: { value: 10, label: "10:30 AM" },
                },
            },

            {
                datasets: [
                    {
                        data: [13, 14, 12, 17, 15, 17],
                        hasGradient: true
                    },
                    {
                        data: [7, 9, 8, 11, 8, 9],
                        hasGradient: true
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "30" },
                    leftRoom: { value: 10, label: "10" },
                    staffVisits: { value: 75, label: "75" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:00 AM" },
                    hydration: { value: 10, label: "10:30 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [12, 16, 8, 2, 1, 6],
                        hasGradient: true
                    },
                    // {
                    //     data: [9, 2, 1, 15, 6, 8],
                    //     hasGradient: false
                    // },
                ],
                activenessDetails: {
                    upAtNight: { value: 50, label: "5" },
                    leftRoom: { value: 25, label: "8" },
                    staffVisits: { value: 50, label: "5" },
                    wakeUp: { value: 62, label: "7:35 AM" },
                    breakfast: { value: 40, label: "8:53 AM" },
                    hydration: { value: 80, label: "9:56 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [2, 11, 5, 0, 6, 1],
                        hasGradient: true
                    },
                    {
                        data: [5, 4, 8, 11, 1, 10],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 50, label: "6" },
                    leftRoom: { value: 65, label: "3" },
                    staffVisits: { value: 10, label: "0" },
                    wakeUp: { value: 70, label: "9:09 AM" },
                    breakfast: { value: 50, label: "10:26 AM" },
                    hydration: { value: 50, label: "10:38 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [1, 6, 5, 11, 13, 5],
                        hasGradient: true
                    },
                    {
                        data: [12, 1, 7, 5, 9, 3],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "14" },
                    leftRoom: { value: 40, label: "2" },
                    staffVisits: { value: 25, label: "1" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:18 AM" },
                    hydration: { value: 50, label: "9:33 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [17, 9, 8, 15, 12, 6],
                        hasGradient: true
                    },
                    {
                        data: [5, 12, 11, 6, 12, 7],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 65, label: "4" },
                    leftRoom: { value: 20, label: "5" },
                    staffVisits: { value: 20, label: "3" },
                    wakeUp: { value: 16, label: "9:07 AM" },
                    breakfast: { value: 75, label: "9:23 AM" },
                    hydration: { value: 50, label: "10:14 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [3, 9, 5, 8, 1, 2],
                        hasGradient: true
                    },
                    {
                        data: [7, 4, 3, 12, 1, 8],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 60, label: "6" },
                    leftRoom: { value: 80, label: "1" },
                    staffVisits: { value: 50, label: "0" },
                    wakeUp: { value: 10, label: "8:21 AM" },
                    breakfast: { value: 90, label: "9:12 AM" },
                    hydration: { value: 25, label: "9:25 AM" },
                },
            },
        ],
        22: [
            {
                datasets: [
                    {
                        data: [10, 17, 6, 1, 5, 8],
                        hasGradient: true
                    },
                    {
                        data: [13, 11, 2, 5, 7, 12],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "30" },
                    leftRoom: { value: 10, label: "10" },
                    staffVisits: { value: 75, label: "75" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:00 AM" },
                    hydration: { value: 10, label: "10:30 AM" },
                },
            },

            // TODO - change values from here below

            // This is for blood pressure.. alter the data carefully
            {
                datasets: [
                    {
                        data: [16, 18, 19, 14, 12, 14],
                        hasGradient: true
                    },
                    {
                        data: [8, 9, 10, 7, 6, 7],
                        hasGradient: true
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "30" },
                    leftRoom: { value: 10, label: "10" },
                    staffVisits: { value: 75, label: "75" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:00 AM" },
                    hydration: { value: 10, label: "10:30 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [10, 9, 12, 6, 8, 11],
                        hasGradient: true
                    },
                    // {
                    //     data: [19, 5, 6, 16, 5, 18],
                    //     hasGradient: false
                    // },
                ],
                activenessDetails: {
                    upAtNight: { value: 50, label: "5" },
                    leftRoom: { value: 25, label: "8" },
                    staffVisits: { value: 50, label: "5" },
                    wakeUp: { value: 62, label: "7:35 AM" },
                    breakfast: { value: 40, label: "8:53 AM" },
                    hydration: { value: 80, label: "9:56 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [12, 1, 15, 10, 16, 11],
                        hasGradient: true
                    },
                    {
                        data: [15, 14, 18, 1, 11, 5],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 50, label: "6" },
                    leftRoom: { value: 65, label: "3" },
                    staffVisits: { value: 10, label: "0" },
                    wakeUp: { value: 70, label: "9:09 AM" },
                    breakfast: { value: 50, label: "10:26 AM" },
                    hydration: { value: 50, label: "10:38 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [6, 8, 15, 1, 8, 7],
                        hasGradient: true
                    },
                    {
                        data: [14, 10, 17, 7, 11, 1],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "14" },
                    leftRoom: { value: 40, label: "2" },
                    staffVisits: { value: 25, label: "1" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:18 AM" },
                    hydration: { value: 50, label: "9:33 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [7, 11, 12, 5, 6, 8],
                        hasGradient: true
                    },
                    {
                        data: [13, 11, 1, 4, 5, 17],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 65, label: "4" },
                    leftRoom: { value: 20, label: "5" },
                    staffVisits: { value: 20, label: "3" },
                    wakeUp: { value: 16, label: "9:07 AM" },
                    breakfast: { value: 75, label: "9:23 AM" },
                    hydration: { value: 50, label: "10:14 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [15, 3, 5, 9, 11, 12],
                        hasGradient: true
                    },
                    {
                        data: [17, 14, 13, 15, 9, 7],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 60, label: "6" },
                    leftRoom: { value: 80, label: "1" },
                    staffVisits: { value: 50, label: "0" },
                    wakeUp: { value: 10, label: "8:21 AM" },
                    breakfast: { value: 90, label: "9:12 AM" },
                    hydration: { value: 25, label: "9:25 AM" },
                },
            },
        ],
        23: [
            {
                datasets: [
                    {
                        data: [9, 7, 11, 10, 15, 6],
                        hasGradient: true
                    },
                    {
                        data: [15, 6, 12, 15, 18, 2],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "30" },
                    leftRoom: { value: 10, label: "10" },
                    staffVisits: { value: 75, label: "75" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:00 AM" },
                    hydration: { value: 10, label: "10:30 AM" },
                },
            },

            // TODO - change values from here below
            // This is for blood pressure.. alter the data carefully
            {
                datasets: [
                    {
                        data: [18, 14, 13, 17, 16, 15],
                        hasGradient: true
                    },
                    {
                        data: [8, 9, 9, 8, 8, 7],
                        hasGradient: true
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "30" },
                    leftRoom: { value: 10, label: "10" },
                    staffVisits: { value: 75, label: "75" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:00 AM" },
                    hydration: { value: 10, label: "10:30 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [10, 13, 12, 11, 12, 7],
                        hasGradient: true
                    },
                    // {
                    //     data: [8, 15, 6, 17, 15, 9],
                    //     hasGradient: false
                    // },
                ],
                activenessDetails: {
                    upAtNight: { value: 50, label: "5" },
                    leftRoom: { value: 25, label: "8" },
                    staffVisits: { value: 50, label: "5" },
                    wakeUp: { value: 62, label: "7:35 AM" },
                    breakfast: { value: 40, label: "8:53 AM" },
                    hydration: { value: 80, label: "9:56 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [14, 11, 5, 10, 8, 5],
                        hasGradient: true
                    },
                    {
                        data: [6, 7, 9, 8, 11, 5],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 50, label: "6" },
                    leftRoom: { value: 65, label: "3" },
                    staffVisits: { value: 10, label: "0" },
                    wakeUp: { value: 70, label: "9:09 AM" },
                    breakfast: { value: 50, label: "10:26 AM" },
                    hydration: { value: 50, label: "10:38 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [12, 18, 5, 7, 9, 13],
                        hasGradient: true
                    },
                    {
                        data: [16, 5, 3, 18, 4, 12],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "14" },
                    leftRoom: { value: 40, label: "2" },
                    staffVisits: { value: 25, label: "1" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:18 AM" },
                    hydration: { value: 50, label: "9:33 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [14, 6, 8, 12, 16, 9],
                        hasGradient: true
                    },
                    {
                        data: [7, 18, 9, 14, 2, 15],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 65, label: "4" },
                    leftRoom: { value: 20, label: "5" },
                    staffVisits: { value: 20, label: "3" },
                    wakeUp: { value: 16, label: "9:07 AM" },
                    breakfast: { value: 75, label: "9:23 AM" },
                    hydration: { value: 50, label: "10:14 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [6, 9, 11, 5, 14, 10],
                        hasGradient: true
                    },
                    {
                        data: [15, 9, 7, 6, 19, 14],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 60, label: "6" },
                    leftRoom: { value: 80, label: "1" },
                    staffVisits: { value: 50, label: "0" },
                    wakeUp: { value: 10, label: "8:21 AM" },
                    breakfast: { value: 90, label: "9:12 AM" },
                    hydration: { value: 25, label: "9:25 AM" },
                },
            },
        ],
        24: [
            {
                datasets: [
                    {
                        data: [11, 18, 5, 3, 1, 6],
                        hasGradient: true
                    },
                    {
                        data: [3, 4, 2, 1, 3, 2],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "30" },
                    leftRoom: { value: 10, label: "10" },
                    staffVisits: { value: 75, label: "75" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:00 AM" },
                    hydration: { value: 10, label: "10:30 AM" },
                },
            },

            {
                datasets: [
                    {
                        data: [15, 16, 14, 12, 15, 18],
                        hasGradient: true
                    },
                    {
                        data: [7, 9, 6, 9, 8, 10],
                        hasGradient: true
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "30" },
                    leftRoom: { value: 10, label: "10" },
                    staffVisits: { value: 75, label: "75" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:00 AM" },
                    hydration: { value: 10, label: "10:30 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [12, 16, 8, 2, 1, 6],
                        hasGradient: true
                    },
                    // {
                    //     data: [9, 2, 1, 15, 6, 8],
                    //     hasGradient: false
                    // },
                ],
                activenessDetails: {
                    upAtNight: { value: 50, label: "5" },
                    leftRoom: { value: 25, label: "8" },
                    staffVisits: { value: 50, label: "5" },
                    wakeUp: { value: 62, label: "7:35 AM" },
                    breakfast: { value: 40, label: "8:53 AM" },
                    hydration: { value: 80, label: "9:56 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [2, 11, 5, 0, 6, 1],
                        hasGradient: true
                    },
                    {
                        data: [5, 4, 8, 11, 1, 10],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 50, label: "6" },
                    leftRoom: { value: 65, label: "3" },
                    staffVisits: { value: 10, label: "0" },
                    wakeUp: { value: 70, label: "9:09 AM" },
                    breakfast: { value: 50, label: "10:26 AM" },
                    hydration: { value: 50, label: "10:38 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [1, 6, 5, 11, 13, 5],
                        hasGradient: true
                    },
                    {
                        data: [12, 1, 7, 5, 9, 3],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 30, label: "14" },
                    leftRoom: { value: 40, label: "2" },
                    staffVisits: { value: 25, label: "1" },
                    wakeUp: { value: 50, label: "8:00 AM" },
                    breakfast: { value: 50, label: "9:18 AM" },
                    hydration: { value: 50, label: "9:33 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [17, 9, 8, 15, 12, 6],
                        hasGradient: true
                    },
                    {
                        data: [5, 12, 11, 6, 12, 7],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 65, label: "4" },
                    leftRoom: { value: 20, label: "5" },
                    staffVisits: { value: 20, label: "3" },
                    wakeUp: { value: 16, label: "9:07 AM" },
                    breakfast: { value: 75, label: "9:23 AM" },
                    hydration: { value: 50, label: "10:14 AM" },
                },
            },
            {
                datasets: [
                    {
                        data: [3, 9, 5, 8, 1, 2],
                        hasGradient: true
                    },
                    {
                        data: [7, 4, 3, 12, 1, 11],
                        hasGradient: false
                    },
                ],
                activenessDetails: {
                    upAtNight: { value: 60, label: "6" },
                    leftRoom: { value: 80, label: "1" },
                    staffVisits: { value: 50, label: "0" },
                    wakeUp: { value: 10, label: "8:21 AM" },
                    breakfast: { value: 90, label: "9:12 AM" },
                    hydration: { value: 25, label: "9:25 AM" },
                },
            },
        ],
    }

    const randomData = () => {
        let newData = [...data];
        let randomData1 = [],
            randomData2 = [];

        console.log(newData)

        for (let i = 0; i < newData.length; i++) {
            const eachVital = newData[i];
            for (let j = 0; j < eachVital.datasets.length; j++) {
                eachVital.datasets[j].data = _.shuffle(eachVital.datasets[j].data);
            }
        }

        // for (let i = 0; i < newData.length; i++) {
        //     for (let j = 0; j < 6; j++) {
        //         randomData1.push(Math.round(Math.random() * 10));
        //         randomData2.push(Math.round((Math.random() * 10) % 3));
        //     }
        //     newData[i].datasets[0].data = randomData1;
        //     newData[i].datasets[1].data = randomData2;
        //     randomData1 = [];
        //     randomData2 = [];
        // }
        // console.log(newData);

        setData(newData);
    };

    React.useEffect(() => {
        console.log('date', selectedDate)
        setData(dummyDataByDate[selectedDate])
    }, [selectedDate])

    return (
        <Row className="py-3">
            <Col md={3} className="p-0 mb-4 mb-md-0">
                <ResidentMedicalHealth />
            </Col>
            <Col md={9} className="pl-0 pl-md-3 pr-0">
                <ResidentInsights
                    handleSelectedVitalInfoIndex={handleSelectedVitalInfoIndex}
                    datasets={data[selectedVitalInfoIndex].datasets}
                    activenessDetails={data[selectedVitalInfoIndex].activenessDetails}
                    title={cardData[selectedVitalInfoIndex].vitalName}
                    index={selectedVitalInfoIndex}
                    randomData={randomData}
                />
            </Col>
        </Row>
    );
};

export default ResidentHealthInfo;
