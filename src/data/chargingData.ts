import { ChargingStation } from '../types';

/**
 * Invented data file for SG CHARGING LOCATER.
 * Contains fictional charging stations and charging points across Singapore.
 * Battery basis: Standard EV 60 kWh battery charging from 20% to 100% (48 kWh needed).
 * No real trademarks, companies, or live external endpoints are used.
 */
export const INVENTED_CHARGING_STATIONS: ChargingStation[] = [
  {
    id: 'st-01',
    name: 'SG EcoVolt Hub - Bras Basah',
    area: 'Central Singapore',
    address: '80 Bras Basah Road, Carpark B2 (Lobby A), Singapore 189560',
    distanceKm: 0.6,
    distanceDisplay: '0.6 km away',
    topSpeedKw: 150,
    speedSummary: '150 kW High-Power DC',
    timeToFullFrom20Percent: '22 mins to finish (at 150 kW)',
    fastestMinutesFrom20: 22,
    totalPoints: 4,
    availablePointsCount: 3,
    parkingFeeInfo: 'First hour free charging parking',
    points: [
      {
        id: 'cp-01-a',
        bayNumber: 'Bay 01',
        connectorType: 'CCS2',
        speedKw: 150,
        speedCategory: 'Ultra-Fast DC',
        status: 'Available',
        timeToFullFrom20Percent: '22 mins',
        estimatedMinutesFrom20: 22,
        ratePerKwh: 'S$0.58/kWh'
      },
      {
        id: 'cp-01-b',
        bayNumber: 'Bay 02',
        connectorType: 'CCS2',
        speedKw: 150,
        speedCategory: 'Ultra-Fast DC',
        status: 'Available',
        timeToFullFrom20Percent: '22 mins',
        estimatedMinutesFrom20: 22,
        ratePerKwh: 'S$0.58/kWh'
      },
      {
        id: 'cp-01-c',
        bayNumber: 'Bay 03',
        connectorType: 'CCS2',
        speedKw: 50,
        speedCategory: 'Rapid DC',
        status: 'In Use',
        timeToFullFrom20Percent: '58 mins',
        estimatedMinutesFrom20: 58,
        ratePerKwh: 'S$0.52/kWh'
      },
      {
        id: 'cp-01-d',
        bayNumber: 'Bay 04',
        connectorType: 'Type 2',
        speedKw: 22,
        speedCategory: 'Fast AC',
        status: 'Available',
        timeToFullFrom20Percent: '2 hrs 10 mins',
        estimatedMinutesFrom20: 130,
        ratePerKwh: 'S$0.46/kWh'
      }
    ]
  },
  {
    id: 'st-02',
    name: 'LionCity HyperCharge - Marina South',
    area: 'Marina Bay District',
    address: '18 Marina Gardens Drive, Coach Park Level 1, Singapore 018953',
    distanceKm: 1.2,
    distanceDisplay: '1.2 km away',
    topSpeedKw: 180,
    speedSummary: '180 kW Supercharge DC',
    timeToFullFrom20Percent: '18 mins to finish (at 180 kW)',
    fastestMinutesFrom20: 18,
    totalPoints: 6,
    availablePointsCount: 4,
    parkingFeeInfo: 'S$2.20/hr standard prevailing carpark rate',
    points: [
      {
        id: 'cp-02-a',
        bayNumber: 'Bay A1',
        connectorType: 'CCS2',
        speedKw: 180,
        speedCategory: 'Ultra-Fast DC',
        status: 'Available',
        timeToFullFrom20Percent: '18 mins',
        estimatedMinutesFrom20: 18,
        ratePerKwh: 'S$0.60/kWh'
      },
      {
        id: 'cp-02-b',
        bayNumber: 'Bay A2',
        connectorType: 'CCS2',
        speedKw: 180,
        speedCategory: 'Ultra-Fast DC',
        status: 'Available',
        timeToFullFrom20Percent: '18 mins',
        estimatedMinutesFrom20: 18,
        ratePerKwh: 'S$0.60/kWh'
      },
      {
        id: 'cp-02-c',
        bayNumber: 'Bay A3',
        connectorType: 'CCS2',
        speedKw: 120,
        speedCategory: 'Rapid DC',
        status: 'In Use',
        timeToFullFrom20Percent: '26 mins',
        estimatedMinutesFrom20: 26,
        ratePerKwh: 'S$0.56/kWh'
      },
      {
        id: 'cp-02-d',
        bayNumber: 'Bay A4',
        connectorType: 'CHAdeMO',
        speedKw: 50,
        speedCategory: 'Rapid DC',
        status: 'Available',
        timeToFullFrom20Percent: '58 mins',
        estimatedMinutesFrom20: 58,
        ratePerKwh: 'S$0.52/kWh'
      },
      {
        id: 'cp-02-e',
        bayNumber: 'Bay B1',
        connectorType: 'Type 2',
        speedKw: 22,
        speedCategory: 'Fast AC',
        status: 'Available',
        timeToFullFrom20Percent: '2 hrs 10 mins',
        estimatedMinutesFrom20: 130,
        ratePerKwh: 'S$0.46/kWh'
      },
      {
        id: 'cp-02-f',
        bayNumber: 'Bay B2',
        connectorType: 'Type 2',
        speedKw: 22,
        speedCategory: 'Fast AC',
        status: 'In Use',
        timeToFullFrom20Percent: '2 hrs 10 mins',
        estimatedMinutesFrom20: 130,
        ratePerKwh: 'S$0.46/kWh'
      }
    ]
  },
  {
    id: 'st-03',
    name: 'GardenVolt Point - Raffles Place',
    area: 'Financial District',
    address: '10 Collyer Quay, Ocean Tower Carpark B1, Singapore 049315',
    distanceKm: 1.8,
    distanceDisplay: '1.8 km away',
    topSpeedKw: 120,
    speedSummary: '120 kW Rapid DC',
    timeToFullFrom20Percent: '26 mins to finish (at 120 kW)',
    fastestMinutesFrom20: 26,
    totalPoints: 3,
    availablePointsCount: 2,
    parkingFeeInfo: 'Free 30-min grace period for EV charging',
    points: [
      {
        id: 'cp-03-a',
        bayNumber: 'Bay 101',
        connectorType: 'CCS2',
        speedKw: 120,
        speedCategory: 'Rapid DC',
        status: 'Available',
        timeToFullFrom20Percent: '26 mins',
        estimatedMinutesFrom20: 26,
        ratePerKwh: 'S$0.55/kWh'
      },
      {
        id: 'cp-03-b',
        bayNumber: 'Bay 102',
        connectorType: 'CCS2',
        speedKw: 50,
        speedCategory: 'Rapid DC',
        status: 'Available',
        timeToFullFrom20Percent: '58 mins',
        estimatedMinutesFrom20: 58,
        ratePerKwh: 'S$0.50/kWh'
      },
      {
        id: 'cp-03-c',
        bayNumber: 'Bay 103',
        connectorType: 'Type 2',
        speedKw: 22,
        speedCategory: 'Fast AC',
        status: 'In Use',
        timeToFullFrom20Percent: '2 hrs 10 mins',
        estimatedMinutesFrom20: 130,
        ratePerKwh: 'S$0.45/kWh'
      }
    ]
  },
  {
    id: 'st-04',
    name: 'Merlion QuickCharge - Tanjong Pagar',
    area: 'Tanjong Pagar Plaza',
    address: '1 Tanjong Pagar Plaza, Multi-Storey Carpark Level 3A, Singapore 082001',
    distanceKm: 2.5,
    distanceDisplay: '2.5 km away',
    topSpeedKw: 60,
    speedSummary: '60 kW Fast DC',
    timeToFullFrom20Percent: '48 mins to finish (at 60 kW)',
    fastestMinutesFrom20: 48,
    totalPoints: 4,
    availablePointsCount: 3,
    parkingFeeInfo: 'HDB carpark rates apply: S$0.60 per 30 mins',
    points: [
      {
        id: 'cp-04-a',
        bayNumber: 'Bay P1',
        connectorType: 'CCS2',
        speedKw: 60,
        speedCategory: 'Rapid DC',
        status: 'Available',
        timeToFullFrom20Percent: '48 mins',
        estimatedMinutesFrom20: 48,
        ratePerKwh: 'S$0.51/kWh'
      },
      {
        id: 'cp-04-b',
        bayNumber: 'Bay P2',
        connectorType: 'CCS2',
        speedKw: 60,
        speedCategory: 'Rapid DC',
        status: 'Available',
        timeToFullFrom20Percent: '48 mins',
        estimatedMinutesFrom20: 48,
        ratePerKwh: 'S$0.51/kWh'
      },
      {
        id: 'cp-04-c',
        bayNumber: 'Bay P3',
        connectorType: 'Type 2',
        speedKw: 11,
        speedCategory: 'Standard AC',
        status: 'Available',
        timeToFullFrom20Percent: '4 hrs 20 mins',
        estimatedMinutesFrom20: 260,
        ratePerKwh: 'S$0.42/kWh'
      },
      {
        id: 'cp-04-d',
        bayNumber: 'Bay P4',
        connectorType: 'Type 2',
        speedKw: 11,
        speedCategory: 'Standard AC',
        status: 'Under Maintenance',
        timeToFullFrom20Percent: 'Unavailable',
        estimatedMinutesFrom20: 999,
        ratePerKwh: 'S$0.42/kWh'
      }
    ]
  }
];

export const DRIVER_STATUS = {
  currentLocationName: 'Downtown Core, Singapore',
  currentBatteryPercent: 20,
  carModelExample: 'Standard 60 kWh EV Battery'
};
