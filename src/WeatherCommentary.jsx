const WeatherCommentary = ({ weather }) => {
  if (!weather) return null;

  const { temp, humidity } = weather.main;
  const condition = weather.weather[0].main;

  return (
    <div className="">
      <h1 className="text-lg font-bold">Weather Commentary:</h1>

      <h1 className="mt-4">Temp: </h1>
      <div className="pl-7">
        {temp > 40 && (
          <p className="italic text-red-500">Tangina ano toh, patayan ah.</p>
        )}
        {temp > 35 && temp <= 40 && (
          <p className=" italic text-red-400">
            Silip sa Impyerno. Dala ka tubig 🔥💧
          </p>
        )}
        {temp > 30 && temp <= 35 && (
          <p className="italic text-orange-300">
            Saks lang. Maybe stay in the shade 🌴
          </p>
        )}
        {temp > 25 && temp <= 30 && (
          <p className="italic text-yellow-200">Jabol weather pre.</p>
        )}
        {temp > 20 && temp <= 25 && (
          <p className="italic text-green-200">
            Ang lamig naman, parang nasa Baguio ka na pre ❄️
          </p>
        )}
        {temp <= 20 && (
          <p className="italic text-blue-200">
            TANGINA ANO TOH, ICE KING DONT DO IT
          </p>
        )}
      </div>

      <h1 className="mt-4">Condition: </h1>
      <div className="pl-7">
        {condition === "Clear" && (
          <p className=" italic text-yellow-300">
            Goods ngayon Tol. Perfect for a walk ☀️
          </p>
        )}
        {condition === "Clouds" && (
          <p className=" italic text-gray-300">
            Medyo maulap. Pero okay lang, chill lang tayo ☁️
          </p>
        )}
        {condition === "Drizzle" && (
          <p className=" italic text-gray-300">
            Maambon boy. Di ako sure baka umulan yan bahala ka. ☁️
          </p>
        )}
        {condition === "Rain" && (
          <p className=" italic text-blue-300">
            Rain incoming. Kapote mo boy ☔
          </p>
        )}
        {condition === "Thunderstorm" && (
          <p className=" italic text-purple-300">Bagyo boy! Mag-ingat ka ⚡</p>
        )}
        {condition === "Snow" && (
          <p className=" italic text-white">
            WHAT THE ACTUAL FUCK. CLIMATE CHANGE IS REAL BRO
          </p>
        )}
      </div>

      <h1 className="mt-4">Humidity: </h1>
      <div className="pl-7">
        {humidity > 80 && (
          <p className=" italic text-green-200">
            Lagkit ng hangin. Humid masyado 😓
          </p>
        )}
        {humidity <= 80 && humidity > 60 && (
          <p className=" italic text-green-300">
            Okay lang hangin, di masyado mainit. Pero wag ka na magpawis 😅
          </p>
        )}
        {humidity <= 60 && (
          <p className=" italic text-green-400">
            Ang ganda ng hangin, parang nasa beach ka lang 🌊
          </p>
        )}
        {humidity <= 40 && (
          <p className=" italic text-green-500">
            Lala, parang nasa Baguio ka na pre ❄️
          </p>
        )}
        {humidity <= 20 && (
          <p className=" italic text-green-600">
            Tangina ano toh, parang nasa Arctic ka na pre ❄️
          </p>
        )}
      </div>
    </div>
  );
};

export default WeatherCommentary;
