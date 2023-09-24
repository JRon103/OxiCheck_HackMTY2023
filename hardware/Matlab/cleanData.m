function newData = cleanData(oldData)
    len = length(oldData);
    newData = [];
    for i = 1:len
        if oldData(i)~=-999 && oldData(i)>=50
            disp("Valid data");
            newData = [newData oldData(i)];
        else
            disp("Invalid data");
        end
    end

    if length(newData)==0
        error("No data")
    end
end