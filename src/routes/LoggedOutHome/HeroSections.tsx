export const HeroSectionTitle = () => {
  return (
    <div className="hero min-h-180">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-semibold">
            Organise with Security
            <br />
            Trade with Safety
          </h1>
          <p className="text-2xl py-6">
            Track your childs school, sports, music and other interest kit. Then
            trade or share with the people you know and trust when it is no
            longer needed, lost or stolen.
          </p>
          <button className="btn btn-lg btn-wide btn-primary text-base-300 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export const HeroSectionOrganise = () => {
  return (
    <div className="hero bg-base-200 min-h-180">
      <div className="hero-content flex-col lg:flex-row max-w-240">
        <img src="/images/organise.svg" className="max-w-sm p-3" />
        <div>
          <h2 className="uppercase text-success mb-1">Organise your kit</h2>
          <h3 className="text-5xl font-semibold">Using family kitbags</h3>
          <p className="text-2xl py-6">
            Store and track your sports, musical, school or whatever kit your
            children need or have.
          </p>
          <button className="btn btn-lg btn-wide btn-success rounded-full">
            Join Youthkitbag
          </button>
        </div>
      </div>
    </div>
  );
};

export const HeroSectionGroups = () => {
  return (
    <div className="hero min-h-180">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-240">
        <img src="/images/groups.svg" className="max-w-sm p-3" />
        <div>
          <h2 className="uppercase text-success mb-1 text-right">
            Join groups
          </h2>
          <h3 className="text-5xl font-semibold text-right">
            Connect with teams, clubs, schools
          </h3>
          <p className="text-2xl py-6 text-right">
            Get approved access to the teams, clubs and schools that your
            children are members of or attend.
          </p>
          <div className="flex justify-end">
            <button className="btn btn-lg btn-wide btn-success rounded-full">
              Join Youthkitbag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
