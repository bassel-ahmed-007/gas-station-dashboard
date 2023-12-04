import React from "react";

function Modal() {
  return (
    <section className="w-[640px] h-[180px] bg-white absolute right-[80px] top-[50px] rounded-[20px] flex flex-col pl-[20px]  shadow-[0_5px_30px_-15px_#FF7F5C]">
      <div className="border-b-[1px] pr-[10px]">
        <div className="mb-[10px] pl-[18px] pt-[10px]">
          <h1 className="text-[16px] text-textColor font-semibold">
            View Proprties:
          </h1>
        </div>
      </div>

      <form className="grid grid-cols-2 pt-[10px] gap-[12px] ml-[12px]">
        <p>
          <input type="checkbox" id="usa" name="vists" />
          <label for="usa">Total sales</label>
        </p>

        <p>
          <input type="checkbox" id="usa" name="vists" />
          <label for="usa">Max transaction count per hour</label>
        </p>

        <p>
          <input type="checkbox" id="usa" name="vists" />
          <label for="usa">Total transaction</label>
        </p>

        <p>
          <input type="checkbox" id="usa" name="vists" />
          <label for="usa">Max transaction count date-time</label>
        </p>

        <p>
          <input type="checkbox" id="usa" name="vists" />
          <label for="usa">Total value</label>
        </p>

        <p>
          <input type="checkbox" id="usa" name="vists" />
          <label for="usa">Compressor status</label>
        </p>
      </form>
    </section>
  );
}

export default Modal;
