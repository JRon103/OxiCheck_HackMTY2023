%% Main Code

%Get ports
serialportlist

%Connect serial
port = "COM3";
valueFrec = 9600;
S = serialport(port,valueFrec);

%Get data
time = 129;
Read = getData(S,time);

%Clean data
cleanedData = cleanData(Read);

%Data results
[meanVal, upVal, downVal] = resultData(cleanedData);

%Send data
url = "http://35.238.147.212:3000/api";
response = sendData(url, meanVal, upVal, downVal);


%% getData
%Read = getData(SerialP,time)

%% sendData
%response = sendData(url,ave,up,down)