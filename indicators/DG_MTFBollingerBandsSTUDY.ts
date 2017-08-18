# DG_MTFBollingerBands
# Paints Bollinger Bands from higher time period
# onto current time period
#
# Copyright (c) 2017 Daniel Granville

input timeframe = AggregationPeriod.DAY;
input period = 50;
input std = 1.0;
input moving_average_type = {default SMA, EMA};

def data = close(period = timeframe);
def band = StDev(data, period);

plot MidLine;

switch(moving_average_type) {
    case SMA:
        MidLine = Average(data, period);
    case EMA:
        MidLine = ExpAverage(data, period);
}

plot BBandTop = MidLine + band;

plot BBandBot = MidLine - band;
