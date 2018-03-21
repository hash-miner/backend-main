# Max Load Test Reports
__test__ git:(hector-back-wednesday) ✗ artillery run max-load.test.json
Started phase 0, duration: 10s @ 11:25:42(-0700) 2018-03-21
Report @ 11:25:52(-0700) 2018-03-21
  Scenarios launched:  19
  Scenarios completed: 19
  Requests completed:  38
  RPS sent: 4.02
  Request latency:
    min: 69.3
    max: 491.4
    median: 226.9
    p95: 460.5
    p99: NaN
  Codes:
    201: 19
    404: 19

Started phase 1, duration: 10s @ 11:25:52(-0700) 2018-03-21
Report @ 11:26:02(-0700) 2018-03-21
  Scenarios launched:  1660
  Scenarios completed: 281
  Requests completed:  566
  RPS sent: 193.81
  Request latency:
    min: 73.5
    max: 8225.4
    median: 481.3
    p95: 7535.3
    p99: 8098.8
  Codes:
    201: 285
    404: 281

Warning:
CPU usage of Artillery seems to be very high
which may severely affect its performance.
See https://artillery.io/docs/faq/#high-cpu-warnings for details.

Report @ 11:26:12(-0700) 2018-03-21
  Scenarios launched:  341
  Scenarios completed: 270
  Requests completed:  542
  RPS sent: 61.61
  Request latency:
    min: 67.9
    max: 16649.9
    median: 394.9
    p95: 16042.5
    p99: 16514.7
  Codes:
    201: 269
    404: 270
    503: 3

Report @ 11:26:22(-0700) 2018-03-21
  Scenarios launched:  0
  Scenarios completed: 336
  Requests completed:  672
  RPS sent: 33.6
  Request latency:
    min: 68.5
    max: 24730.4
    median: 8409.3
    p95: 23955.9
    p99: 24560.2
  Codes:
    201: 336
    404: 336

Report @ 11:26:32(-0700) 2018-03-21
  Scenarios launched:  0
  Scenarios completed: 174
  Requests completed:  894
  RPS sent: 17.1
  Request latency:
    min: 68.7
    max: 31194.6
    median: 30312
    p95: 30414.4
    p99: 30433.8
  Codes:
    201: 171
    404: 174
    503: 549

Report @ 11:26:35(-0700) 2018-03-21
  Scenarios launched:  0
  Scenarios completed: 0
  Requests completed:  388
  RPS sent: NaN
  Request latency:
    min: 30287.1
    max: 31382.2
    median: 30315
    p95: 30421.7
    p99: 30434.3
  Codes:
    503: 388

All virtual users finished
Summary report @ 11:26:35(-0700) 2018-03-21
  Scenarios launched:  2020
  Scenarios completed: 1080
  Requests completed:  3100
  RPS sent: 58.83
  Request latency:
    min: 67.9
    max: 31382.2
    median: 13800.2
    p95: 30369.4
    p99: 30426.1
  Scenario counts:
    Create Users: 2020 (100%)
  Codes:
    201: 1080
    404: 1080
    503: 940