function [meanVal, upVal, downVal] = resultData(data)
    meanVal = mean(data);
    upVal = mean(maxk(data,3));
    downVal = mean(mink(data,3));
end