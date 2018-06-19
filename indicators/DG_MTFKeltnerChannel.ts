# DG_MTFKeltnerChannel
# Paints Keltner Channel from higher time period
# onto current time period
#
# Copyright (c) 2017 Daniel Granville

input timeframe = AggregationPeriod.DAY;
input moving_average_type = {Default SMA, EMA};
input period = 50;
input atr_factor = 1.0;
input atr_average_type = {Default WILDERS, SMA, EMA};

def mtf_close = close(period = timeframe);
def mtf_high = high(period = timeframe);
def mtf_low = low(period = timeframe);

plot MidLine;

switch(moving_average_type) {
  case SMA:
    MidLine = Average(mtf_close, period);
  case EMA:
    MidLine = ExpAverage(mtf_close, period);
}

def mtf_tr = TrueRange(mtf_high, mtf_close, mtf_low);

def mtf_atr;

switch(atr_average_type) {
  case SMA:
    mtf_atr = Average(mtf_tr, period);
  case EMA:
    mtf_atr = ExpAverage(mtf_tr, period);
  case WILDERS:
    mtf_atr = WildersAverage(mtf_tr, period);
}

plot KChannelTop = MidLine + ( atr_factor * mtf_atr );
plot KChannelBot = MidLine - ( atr_factor * mtf_atr );
