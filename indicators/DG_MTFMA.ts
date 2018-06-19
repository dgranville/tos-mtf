# DG_MTFMA
# Paints MA from higher time period
# onto current time period
#
# Copyright (c) 2017 Daniel Granville

input moving_average_type = {Default SMA, EMA};
input timeframe = AggregationPeriod.DAY;
input period = 10;

def data = close(period = timeframe);

plot MA;

switch(moving_average_type) {
  case SMA:
    MA = Average(data, period);
  case EMA:
    MA = ExpAverage(data, period);
}
