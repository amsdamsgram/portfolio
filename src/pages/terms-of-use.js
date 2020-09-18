import React from "react";

import Layout from "../components/Layout";
import Section from "../components/Section";
import Title from "../components/Title";

const Link = ({ href, text }) => (
  <a href={href} target={"_blank"} rel="noopener noreferrer">
    {text}
  </a>
);

export default props => (
  <Layout location={props.location} withHeader={false}>
    <Section htmlID={""}>
      <h1>Terms and Conditions</h1>
      <p>
      By downloading or using our apps, these terms will automatically apply
          to you – you should make sure therefore that you read them carefully
          before using the app. You’re not allowed to copy, or modify the app,
          any part of the app, or our trademarks in any way. You’re not allowed
          to attempt to extract the source code of the app, and you also
          shouldn’t try to translate the app into other languages, or make
          derivative versions. The app itself, and all the trade marks,
          copyright, database rights and other intellectual property rights
          related to it, still belong to Damien Soulard.
      </p>
      <p>
      Damien Soulard is committed to ensuring that our apps are as useful and
          efficient as possible. For that reason, we reserve the right to make
          changes to our apps or to charge for its services, at any time and for
          any reason. We will never charge you for our apps or its services
          without making it very clear to you exactly what you’re paying for.
      </p>
      <p>
          Our applications store and processe personal data that you have
          provided to us, in order to provide our Service. It’s your
          responsibility to keep your phone and access to the app secure. We
          therefore recommend that you do not jailbreak or root your phone,
          which is the process of removing software restrictions and limitations
          imposed by the official operating system of your device. It could make
          your phone vulnerable to malware/viruses/malicious programs,
          compromise your phone’s security features and it could mean that the
          Our application app won’t work properly or at all.
        </p>
        <div>
          <p>
            Our apps do use third party services that declare their own Terms
            and Conditions.
          </p>
          <p>
            Link to Terms and Conditions of third party service providers used
            by our apps
          </p>
          <ul>
          <li>
              <Link
                href="https://www.google.com/policies/privacy/"
                text="Google Play Services"
              />
            </li>
            <li>
              <Link
                href="https://support.google.com/admob/answer/6128543?hl=en"
                text="AdMob"
              />
            </li>
            <li>
              <Link
                href="https://www.facebook.com/about/privacy/update/printable"
                text="Facebook"
              />
            </li>
            <li>
              <Link
                href="https://www.applovin.com/privacy/"
                text="AppLovin"
              />
            </li>
            <li>
              <Link
                href="https://www.adcolony.com/privacy-policy/"
                text="AdColony"
              />
            </li>
            <li>
              <Link
                href="https://ironsource.mobi/privacypolicy.html"
                text="ironSource"
              />
            </li>
            <li>
              <Link
                href="https://amplitude.com/privacy"
                text="Amplitude"
              />
            </li>
            <li>
              <Link
                href="https://firebase.google.com/support/privacy/"
                text="Firebase"
              />
            </li>
            <li>
              <Link
                href="https://firebase.google.com/terms/analytics"
                text="Firebase Analytics"
              />
            </li>
            <li>
              <Link
                href="https://firebase.google.com/terms/crashlytics"
                text="Firebase Crashlytics"
              />
            </li>
            <li>
              <Link
                href="https://www.adjust.com/terms/privacy-policy/"
                text="Adjust"
              />
            </li>
            <li>
              <Link
                href="https://www.mopub.com/en/legal/privacy"
                text="Mopub"
              />
            </li>
          </ul>
        </div>
        <p>
          You should be aware that there are certain things that Damien Soulard will
          not take responsibility for. Certain functions of our apps will
          require the app to have an active internet connection. The connection
          can be Wi-Fi, or provided by your mobile network provider, but Damien Soulard cannot take responsibility for our apps not working at full
          functionality if you don’t have access to Wi-Fi, and you don’t have
          any of your data allowance left.
        </p>
        <p>
          If you're using our apps outside of an area with Wi-Fi, you should
          remember that your terms of the agreement with your mobile network
          provider will still apply. As a result, you may be charged by your
          mobile provider for the cost of data for the duration of the
          connection while accessing our apps, or other third party charges. In
          using our apps, you’re accepting responsibility for any such charges,
          including roaming data charges if you use our apps outside of your
          home territory (i.e. region or country) without turning off data
          roaming. If you are not the bill payer for the device on which you’re
          using our apps, please be aware that we assume that you have received
          permission from the bill payer for using our apps.
        </p>
        <p>
          Along the same lines, Damien Soulard cannot always take responsibility for
          the way you use the app i.e. You need to make sure that your device
          stays charged – if it runs out of battery and you can’t turn it on to
          avail the Service, Damien Soulard cannot accept responsibility.
        </p>
        <p>
          With respect to Damien Soulard’s responsibility for your use of our apps,
          when you’re using our apps, it’s important to bear in mind that
          although we endeavour to ensure that it is updated and correct at all
          times, we do rely on third parties to provide information to us so
          that we can make it available to you. Damien Soulard accepts no liability
          for any loss, direct or indirect, you experience as a result of
          relying wholly on this functionality of our apps.
        </p>
        <p>
          At some point, we may wish to update our apps. Our apps are currently
          available on Android &amp; iOS – the requirements for both systems
          (and for any additional systems we decide to extend the availability
          of the app to) may change, and you’ll need to download the updates if
          you want to keep using our apps. Damien Soulard does not promise that it
          will always update our apps so that it is relevant to you and/or works
          with the Android &amp; iOS version that you have installed on your
          device. However, you promise to always accept updates to the
          application when offered to you, We may also wish to stop providing
          our apps, and may terminate use of it at any time without giving
          notice of termination to you. Unless we tell you otherwise, upon any
          termination, (a) the rights and licenses granted to you in these terms
          will end; (b) you must stop using our apps, and (if needed) delete it
          from your device.
        </p>
      <Title anchor="changes">Changes to this Terms and Conditions</Title>
      <p>
          We may update our Terms and Conditions from time to time. Thus, you
          are advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Terms and Conditions on
          this page.
        </p>
        <p>These terms and conditions are effective as of 2020-06-26</p>
      <Title anchor="contact">
      Contact us
      </Title>
      <p>
          If you have any questions or suggestions about our Terms and
          Conditions, do not hesitate to contact us at damien.soulard@gmail.com.
        </p>
        <p>
          This Terms and Conditions page was generated by{" "}
          <a
            href="https://app-privacy-policy-generator.firebaseapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            App Privacy Policy Generator
          </a>
        </p>
    </Section>
  </Layout>
);
