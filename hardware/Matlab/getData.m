function Read = getData(SerialP,time)
    serialWrite("R",SerialP);
    for i = 1:time
        disp(string(i/time*100)+"%");
        disp(i);
        pause(1);
    end
    Lec = strtrim(serialRead(SerialP));
    Lec = replace(Lec,"I","[");
    Lec = replace(Lec,"F","]");
    Read = eval(Lec);
    disp("End");
end