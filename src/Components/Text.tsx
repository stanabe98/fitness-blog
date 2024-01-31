import { equipmentlist } from "../data/items";
import "../Styles/PageContent.css";

interface MyComponentProps {
  value: string;
}

const TextContent: React.FC<MyComponentProps> = ({ value }) => {
  let output: JSX.Element;
  switch (value) {
    case equipmentlist[0].displayName:
      output = (
        <>
          <p>
            An adjustable weight benches offers more versatility than a flat
            bench, offering more workout variety and better training space. For
            example with the adjustable bench you can perform abdominal exercies
            from a decline position. For most lifters an adjustable bench
            capable of loading at least 250kg is desired. This will ensure
            safety and stability when performing exercises.
          </p>
          <br></br>
          <p>
            Mirafit, have a good range of affordable and durable adjustable
            benches. This example, comes with:
          </p>
          <ul className="list-item text-left">
            <li>6 backrest positions and 4 angled seat positions</li>
            <li>Built-in castors to ease positioning</li>
            <li>260kg tested</li>
          </ul>
        </>
      );

      break;
    case equipmentlist[1].displayName:
      output = (
        <>
          <p>
            Adjustable dumbbells, enable changing the weight in seconds,
            effectively providing an entire rack of dumbbells in a single
            compact design. The disadvantage is they can get extremely clunky
            and awkward to handle when you change it to a high weight. The
            heavier weights may not be ideal for executing isolation exercises,
            such as curls and tricep extensions but are more suited for compound
            exercises like presses and rows. It's recommended to purchase 40kg
            adjustable dumbells. Even if you beleieve you will not use that much
            weight, it is worthwhile. All adjustable dumbbells are quite
            expensive, thus making a commitment will save you the hassle of
            future purchases if you change your mind. This example is sold by
            braingain and its arguable the cheapest in the market. It comes
            with:
          </p>
          <br></br>
          <ul className="list-item text-left">
            <li>
              {" "}
              17 weights in one dumbbell, allowing you to select between 5kg and
              40kg with a simple twist of the dial
            </li>
            <li>
              {" "}
              Increments: 5kg, 7kg, 9kg, 11kg, 13kg, 15kg, 18kg, 20kg, 22kg,
              25kg, 27kg, 29kg, 32kg, 34kg, 36kg, 38kg, 40kg
            </li>
            <li>Dimensions: 45cm x 25cm x 25cm</li>
          </ul>
        </>
      );

      break;
    case equipmentlist[2].displayName:
      output = (
        <>
          <p>
            Adjustable rack is necessary for executing most barbell exercises
            like presses, squats and rows etc. This is signficantly cheaper
            alternative to the power rack. The main advantage is that these are
            a space saving option which are extremely flexible to move around in
            smaller areas. The disadvantage is that you need to carefully align
            each rack, to hold the barbell symmetrically when you unrack it.
          </p>
        </>
      );

      break;
    case equipmentlist[3].displayName:
      output = (
        <p>
          Barbell and weights are the most essential and versatile fitness
          equipment. An olympic style 7ft long, 2inch diameter, 20kg bar is the
          recommendation. Barbells do not need to be extremely expensive, but
          this depends on your level of strength and the exercises you do. If
          you are the kind of person that is loading over 220kg on the bar, it
          is best to opt for a rogue quality bar, as the less expensive ones
          will begin to bend after continually loading with heavy weight. As for
          most gym goers who would not typically load more than 200kg. The
          recommended barbell and weights set will do plenty. The plates do not
          need to be expensive, all metal plates are extremely durable and you
          don't need to worry about damaging it. If you are doing a lot of heavy
          lifting of the floor, then bumper plates are more suitable to avoid
          damaging the floor and the plates. A cheap alternative is to get a
          pair of bumper plates and stick them on each side. The bumper are
          larger in diameter they will make contact with the floor.
        </p>
      );

      break;
    case equipmentlist[4].displayName:
      output = (
        <p>
          {" "}
          Some heavy duty flooring is necessary for any lifter. The foam mats
          are not recommended, in areas where heavy weight is loaded or heavy
          exercises are performed. Due to the springy effect of the surface,
          they can disrupt balance when performing any heavy standing exercise.
          The foam mats can also have a bubbling effect when they are exposed to
          sunlight and will give your space an unpleasant look. Opting for
          robust, heavy duty mats that offer stability, weather resistance, and
          easy maintenance is advised.
        </p>
      );
      break;
    case equipmentlist[5].displayName:
      output = (
        <p>
          {" "}
          An integrated Lat pulldown and tricep pushdown machine is very convenient accessory,
          but not a neccessity for a home gym. The machine allows for more stability thus making
          it easier to target the muscles.It also offers the possibility to
          execute numerous exercises. A plate loaded version is ideal for the
          flexibility and loading potential.
        </p>
      );
      break;
    case equipmentlist[6].displayName:
      output = (
        <p>
          A power rack allows you to complete any barbell exercise, excellent
          for building both strength and size. The sturdy frame means you can go
          heavy for a powerlifting style of training, or you can push yourself
          to failure with lighter weights for a bodybuilding style of training.
          They have a lot of options for placing the hooks and moving barbells
          to different hooks is easy. A few drawbacks of power racks are the
          initial installation, potential to relocate it and the space it
          occupies.
        </p>
      );
      break;
    case equipmentlist[7].displayName:
      output = (
        <p>
          {" "}
          There are a few options when it comes to pullup bars. You can get
          pullup bars that mount against the wall or ones that you can hang over
          the door. These are not recommended as mounting pullup bars on walls
          or over doors can potentially damage the structure with repetative
          use. The best option is a pullup platform with a dip bars as it
          offers the most versatility.
        </p>
      );
      break;
    case equipmentlist[8].displayName:
      output = (
        <p>
          {" "}
          Not too much thought needs to go into this.Any weight tree that can
          hold all your plates is sufficient.
        </p>
      );
      break;
    default:
      output = <div>Default content</div>;
  }

  return <>{output}</>;
};

export default TextContent;
