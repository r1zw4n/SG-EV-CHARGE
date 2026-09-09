import { ArrowLeft, Zap, Clock, ShieldCheck, AlertCircle, Fuel, CheckCircle, Navigation, MapPin } from 'lucide-react';
import { ChargingStation, ChargingPoint } from '../types';

interface Screen2ChargingPointsProps {
  station: ChargingStation;
  onBack: () => void;
}

export default function Screen2ChargingPoints({ station, onBack }: Screen2ChargingPointsProps) {
  const availablePoints = station.points.filter(p => p.status === 'Available');
  const busyPoints = station.points.filter(p => p.status !== 'Available');

  return (
    <div className="w-full max-w-md mx-auto px-4 py-5 space-y-5">
      {/* Back button and Station Summary */}
      <div>
        <button
          id="back-to-screen1-btn"
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white hover:border-slate-700 transition-all cursor-pointer mb-3"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-400" />
          <span>← Back to Nearest Stations</span>
        </button>

        {/* Selected Station Card Header */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Screen 2 • Location Detail
            </span>
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-bold text-emerald-400">
              <Navigation className="w-3 h-3" />
              <span>{station.distanceDisplay}</span>
            </div>
          </div>

          <h2 className="text-lg font-bold text-white mt-1">
            {station.name}
          </h2>

          <div className="flex items-start gap-1.5 text-xs text-slate-400 mt-1">
            <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
            <span>{station.address}</span>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
              <div className="text-slate-400 text-[11px]">Availability</div>
              <div className="font-bold text-emerald-400 mt-0.5">
                {station.availablePointsCount} of {station.totalPoints} Bays Free
              </div>
            </div>
            <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
              <div className="text-slate-400 text-[11px]">Parking Note</div>
              <div className="font-medium text-slate-300 mt-0.5 truncate" title={station.parkingFeeInfo}>
                {station.parkingFeeInfo}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charging Points Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Charging Points at this Location
            </h3>
          </div>
          <span className="text-xs font-medium text-slate-400">
            {station.points.length} Bays Total
          </span>
        </div>

        {/* List of charging points */}
        <div className="space-y-3">
          {station.points.map((point: ChargingPoint) => {
            const isAvailable = point.status === 'Available';
            const isInUse = point.status === 'In Use';

            return (
              <div
                key={point.id}
                id={`point-card-${point.id}`}
                className={`p-4 rounded-2xl border transition-all ${
                  isAvailable
                    ? 'bg-slate-900 border-emerald-500/40 shadow-sm'
                    : 'bg-slate-900/60 border-slate-800 opacity-80'
                }`}
              >
                {/* Header Row: Bay Number, Connector Type, and Status Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-extrabold text-white">
                      {point.bayNumber}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200">
                      {point.connectorType}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                      isAvailable
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : isInUse
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {isAvailable ? (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                    )}
                    <span>{point.status}</span>
                  </div>
                </div>

                {/* Point Specifications & 20% Charge Time */}
                <div className="grid grid-cols-2 gap-2.5 mt-3 pt-3 border-t border-slate-800">
                  {/* Speed Column */}
                  <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span>Charging Speed</span>
                    </div>
                    <div className="text-base font-black text-white mt-0.5">
                      {point.speedKw} kW
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {point.speedCategory}
                    </div>
                  </div>

                  {/* Time to Finish from 20% */}
                  <div className="bg-slate-950/70 p-2.5 rounded-xl border border-emerald-950/60">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Time from 20%</span>
                    </div>
                    <div className="text-base font-black text-emerald-300 mt-0.5">
                      {isAvailable ? point.timeToFullFrom20Percent : 'Occupied'}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {isAvailable ? 'to 100% full battery' : 'Bay currently in use'}
                    </div>
                  </div>
                </div>

                {/* Tariff / Rate info */}
                <div className="flex items-center justify-between mt-3 pt-2 text-xs text-slate-400">
                  <span>Rate: <strong className="text-slate-200">{point.ratePerKwh}</strong></span>
                  {isAvailable && (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Ready to Plug In
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Arm's length readable return action */}
      <div className="pt-2">
        <button
          id="return-bottom-btn"
          type="button"
          onClick={onBack}
          className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm text-center border border-slate-700 transition-colors cursor-pointer"
        >
          ← Return to Nearest 3 Stations
        </button>
      </div>
    </div>
  );
}
