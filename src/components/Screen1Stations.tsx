import { useState } from 'react';
import { ArrowRight, Zap, Clock, Navigation, CheckCircle2, ChevronRight, Gauge } from 'lucide-react';
import { ChargingStation, FilterOption } from '../types';

interface Screen1StationsProps {
  stations: ChargingStation[];
  onSelectStation: (station: ChargingStation) => void;
}

export default function Screen1Stations({ stations, onSelectStation }: Screen1StationsProps) {
  const [filterMode, setFilterMode] = useState<FilterOption>('nearest');

  // Sort and pick top 3 based on user choice: "nearest" or "fastest"
  const sortedStations = [...stations].sort((a, b) => {
    if (filterMode === 'nearest') {
      return a.distanceKm - b.distanceKm;
    }
    // Fastest charging has the highest kW speed (or lowest minutes from 20%)
    return b.topSpeedKw - a.topSpeedKw;
  });

  const top3Stations = sortedStations.slice(0, 3);

  return (
    <div className="w-full max-w-md mx-auto px-4 py-5 space-y-5">
      {/* Introduction banner for arm's length phone reading */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              EV Charging Guide
            </div>
            <h2 className="text-lg font-bold text-white mt-0.5">
              Find Nearest 3 Stations
            </h2>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Calculated for your EV currently at <strong className="text-amber-300 font-semibold">20% battery</strong>.
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400 shrink-0 border border-slate-700">
            <Gauge className="w-6 h-6" />
          </div>
        </div>

        {/* Option toggle: Nearest vs Fastest Charging */}
        <div className="mt-4 pt-3 border-t border-slate-800">
          <div className="text-xs font-semibold text-slate-300 mb-2">
            Sort stations by:
          </div>
          <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800" role="tablist">
            <button
              id="filter-nearest-btn"
              type="button"
              onClick={() => setFilterMode('nearest')}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterMode === 'nearest'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Nearest Location</span>
            </button>
            <button
              id="filter-fastest-btn"
              type="button"
              onClick={() => setFilterMode('fastest')}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterMode === 'fastest'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Fastest Charging</span>
            </button>
          </div>
        </div>
      </div>

      {/* Screen 1 Station List (Top 3) */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Showing Top 3 Stations
          </span>
          <span className="text-xs font-medium text-emerald-400">
            {filterMode === 'nearest' ? 'Sorted by Proximity' : 'Sorted by Max kW Speed'}
          </span>
        </div>

        {top3Stations.map((station, index) => {
          const rank = index + 1;
          const isTopPick = rank === 1;

          return (
            <div
              key={station.id}
              id={`station-card-${station.id}`}
              onClick={() => onSelectStation(station)}
              className={`group relative bg-slate-900 border rounded-2xl p-4 transition-all hover:border-emerald-500/70 hover:shadow-lg hover:shadow-emerald-950/30 cursor-pointer ${
                isTopPick ? 'border-emerald-500/50 bg-gradient-to-b from-slate-900 to-slate-900/90' : 'border-slate-800'
              }`}
            >
              {/* Top Row: Rank Tag & Distance Badge */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-black ${
                      isTopPick ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    #{rank}
                  </span>
                  <span className="text-xs font-semibold text-slate-300">
                    {station.area}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs font-bold text-emerald-400">
                  <Navigation className="w-3 h-3 text-emerald-400" />
                  <span>{station.distanceDisplay}</span>
                </div>
              </div>

              {/* Station Name & Address */}
              <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                {station.name}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                {station.address}
              </p>

              {/* Key Metrics: Charging Speed & Time from 20% to full */}
              <div className="grid grid-cols-2 gap-2 mt-3.5 pt-3 border-t border-slate-800/80">
                {/* Speed info */}
                <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-2.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Max Speed</span>
                  </div>
                  <div className="text-sm font-extrabold text-white mt-1">
                    {station.topSpeedKw} kW
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight truncate">
                    {station.speedSummary}
                  </div>
                </div>

                {/* Time to full charge from 20% */}
                <div className="bg-slate-950/70 border border-emerald-950/80 rounded-xl p-2.5">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>From 20% Batt</span>
                  </div>
                  <div className="text-sm font-extrabold text-emerald-300 mt-1">
                    ~{station.fastestMinutesFrom20} mins
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight">
                    to 100% full charge
                  </div>
                </div>
              </div>

              {/* Action row & Available points count */}
              <div className="flex items-center justify-between mt-3.5 pt-2.5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>
                    <strong className="text-emerald-400">{station.availablePointsCount}</strong> of {station.totalPoints} bays available
                  </span>
                </div>

                <button
                  id={`view-station-btn-${station.id}`}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectStation(station);
                  }}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-xs font-bold text-emerald-300 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all cursor-pointer"
                >
                  <span>View Points</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Note about 20% charge calculation basis */}
      <div className="text-center p-3 rounded-xl bg-slate-950/50 border border-slate-800/50 text-[11px] text-slate-400">
        Time estimates calculate charging a standard 60 kWh battery from 20% to full (48 kWh).
      </div>
    </div>
  );
}
