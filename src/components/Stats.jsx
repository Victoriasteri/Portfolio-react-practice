function Stats() {
  return (
    <div className="">
      <div
        className="flex pt-[60px] max-xl:pt-[10px] max-md:justify-center
      max-md:pt-[230px]"
      >
        <div className="max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
          <span className="lime text-4xl font-bold">98%</span>
          <p>Satisfaction Rate</p>
        </div>

        <div className="pl-10 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
          <span className="lime text-4xl font-bold">100+</span>
          <p>Projects Delivered</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
