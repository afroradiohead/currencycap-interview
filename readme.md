## Currency Cap Interview
By Christopher Clarke

### Concept
Build an endpoint using AWS lambda to calculate the dynamically changing cost
of a banana within a certain time range

aka

the banana budget :banana :moneybag

### Demo
GET [banana budget](https://iw4jx8w0vb.execute-api.us-east-1.amazonaws.com/dev/banana-budget)

PARAMS:

```
key - startDate: string
default value - [today's date]
Acceptable formats: MM-DD-YYYY, YYYY-MM-DD, MM/DD/YYYY
```

```
key - numberOfDays: number
default value - 1
```

#### More Examples:
https://iw4jx8w0vb.execute-api.us-east-1.amazonaws.com/dev/banana-budget?startDate=1/1/2015&numberOfDays=333
https://iw4jx8w0vb.execute-api.us-east-1.amazonaws.com/dev/banana-budget?numberOfDays=33
https://iw4jx8w0vb.execute-api.us-east-1.amazonaws.com/dev/banana-budget?startDate=2018-4-21
