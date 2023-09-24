function response = sendData(url,ave,up,down)
    dataJSON = struct("Alta", up, "Baja", down, "Promedio", ave); % Codify data to send
    options = weboptions('MediaType', 'application/json'); % Config options
    response = webwrite(url, dataJSON, options); % HTTP POST
    disp(response); % Display response
end