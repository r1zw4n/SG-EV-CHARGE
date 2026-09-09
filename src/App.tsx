import { useState } from 'react';
import Header from './components/Header';
import Screen1Stations from './components/Screen1Stations';
import Screen2ChargingPoints from './components/Screen2ChargingPoints';
import { INVENTED_CHARGING_STATIONS } from './data/chargingData';
import { ActiveScreen, ChargingStation } from './types';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('stations');
  const [selectedStation, setSelectedStation] = useState<ChargingStation>(INVENTED_CHARGING_STATIONS[0]);

  const handleSelectStation = (station: ChargingStation) => {
    setSelectedStation(station);
    setActiveScreen('points');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToStations = () => {
    setActiveScreen('stations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      {/* Sticky Header with Battery indicator & breadcrumb */}
      <Header
        currentScreen={activeScreen}
        selectedStationName={selectedStation.name}
        onBackToStations={handleBackToStations}
      />

      {/* Main Content Area: Screen 1 vs Screen 2 */}
      <main className="flex-1 w-full pb-10">
        {activeScreen === 'stations' ? (
          <Screen1Stations
            stations={INVENTED_CHARGING_STATIONS}
            onSelectStation={handleSelectStation}
          />
        ) : (
          <Screen2ChargingPoints
            station={selectedStation}
            onBack={handleBackToStations}
          />
        )}
      </main>

      {/* Footer disclaimer and context note */}
      <footer className="w-full border-t border-slate-900 py-4 text-center text-xs text-slate-500 bg-slate-950">
        <div className="max-w-md mx-auto px-4 space-y-1">
          <p className="font-semibold text-slate-400">SG CHARGING LOCATER</p>
          <p>Fictional EV charging simulation for Singapore drivers • SMU MGMT 6110</p>
        </div>
      </footer>
    </div>
  );
}
