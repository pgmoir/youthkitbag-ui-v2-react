export const HeroSectionTitle = () => {
  return (
    <section id="title" className="hero min-h-180">
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
    </section>
  );
};

export const HeroSectionOrganise = () => {
  return (
    <section id="kitbags" className="hero bg-base-200 min-h-180">
      <div className="hero-content flex-col md:flex-row max-w-240">
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
    </section>
  );
};

export const HeroSectionGroups = () => {
  return (
    <section id="groups" className="hero min-h-180">
      <div className="hero-content flex-col md:flex-row-reverse max-w-240">
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
    </section>
  );
};

export const HeroSectionTrust = () => {
  return (
    <section id="trust" className="hero bg-base-300 min-h-180">
      <div className="hero-content flex-col max-w-240">
        <h2 className="text-5xl font-semibold text-center">Trust in Groups</h2>
        <div className="flex lg:flex-row flex-col">
          <div className="card bg-base-100 w-82 shadow-sm m-2">
            <figure className="px-10 pt-10">
              <img
                src="/images/groupmembership.svg"
                alt="Membership"
                className="rounded-xl max-w-xs max-h-48 object-contain"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">Membership</h2>
              <p className="text-lg">Recognised and authenticated groups</p>
            </div>
          </div>
          <div className="card bg-base-100 w-82 shadow-sm m-2">
            <figure className="px-10 pt-10">
              <img
                src="/images/groupsafety.svg"
                alt="Safety"
                className="rounded-xl max-w-xs max-h-48 object-contain"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">Safety</h2>
              <p className="text-lg">Approved and authorised members</p>
            </div>
          </div>
          <div className="card bg-base-100 w-82 shadow-sm m-2">
            <figure className="px-10 pt-10">
              <img
                src="/images/grouptradeonly.svg"
                alt="Trade"
                className="rounded-xl max-w-xs max-h-48 object-contain"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">Trade</h2>
              <p className="text-lg">With the people you know and trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroSectionTrade = () => {
  return (
    <section id="market" className="hero min-h-180">
      <div className="hero-content flex-col md:flex-row max-w-240">
        <img src="/images/trade.svg" className="max-w-sm p-3" />
        <div>
          <h2 className="uppercase text-success mb-1">Trade Recycle Find</h2>
          <h3 className="text-5xl font-semibold">
            Free trade and recycle with people you know
          </h3>
          <p className="text-2xl py-6">
            When your kids grow up or move on, sell or recycle kit with the
            people you know or trust. If its lost or stolen, or you need new or
            used kit, share the info quickly with the people most likely to
            help,
          </p>
          <button className="btn btn-lg btn-wide btn-success rounded-full">
            Join Youthkitbag
          </button>
        </div>
      </div>
    </section>
  );
};

export const HeroSectionSignup = () => {
  return (
    <section id="signup" className="hero bg-primary min-h-180">
      <div className="hero-content">
        <div className="card bg-base-100 shrink-0 shadow-2xl min-w-lg">
          <div className="card-body">
            <h2 className="text-3xl font-semibold text-center">Sign Up</h2>
            <fieldset className="fieldset">
              <label className="label">First Name</label>
              <input
                type="firstName"
                className="input w-full"
                placeholder="Enter you first name"
              />
              <label className="label">Last Name</label>
              <input
                type="lastName"
                className="input w-full"
                placeholder="Enter you last name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Enter your email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Create your password"
              />
              <label className="label">Confirm Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Confirm your password"
              />
              <button className="btn btn-xl btn-primary mt-4 text-base-300 mb-3">
                Sign Up
              </button>
              <div className="text-center">
                <span>If you already have a kitbag, </span>
                <a className="link link-hover">then login for access</a>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </section>
  );
};
