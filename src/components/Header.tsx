import { Zap, BatteryCharging, MapPin } from 'lucide-react';
import { DRIVER_STATUS } from '../data/chargingData';

interface HeaderProps {
  currentScreen: 'stations' | 'points';
  selectedStationName?: string;
  onBackToStations: () => void;
}

export default function Header({ currentScreen, selectedStationName, onBackToStations }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-slate-900 border-b border-slate-800 text-white px-4 py-3 shadow-md">
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <Zap className="w-5 h-5 fill-emerald-400" />
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-white leading-tight">
              SG CHARGING LOCATER
            </h1>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="truncate max-w-[170px]">{DRIVER_STATUS.currentLocationName}</span>
            </div>
          </div>
        </div>

        {/* Live Battery Badge showing 20% */}
        <div
          id="driver-battery-indicator"
          className="flex items-center gap-1.5 px-2.5 py-1.5 bg-amber-950/40 border border-amber-500/40 rounded-lg shrink-0"
          title="Your current battery level"
        >
          <BatteryCharging className="w-4 h-4 text-amber-400 animate-pulse" />
          <div className="text-right">
            <div className="text-[10px] uppercase font-semibold text-amber-300/80 leading-none">Batt</div>
            <div className="text-xs font-bold text-amber-400 leading-tight">20%</div>
          </div>
        </div>
      </div>

      {/* Screen subtitle / Breadcrumb */}
      <div className="max-w-md mx-auto mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
        {currentScreen === 'stations' ? (
          <span className="font-medium text-slate-300">
            Screen 1 • Nearest Stations Overview
          </span>
        ) : (
          <div className="flex items-center gap-2 overflow-hidden">
            <button
              onClick={onBackToStations}
              className="text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-2 shrink-0 cursor-pointer"
            >
              ← Back to Stations
            </button>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 truncate">Screen 2 • Points</span>
          </div>
        )}
        <span className="text-slate-400 text-[11px] font-mono">
          {currentScreen === 'stations' ? 'Top 3 Ranked' : selectedStationName}
        </span>
      </div>
    </header>
  );
}
