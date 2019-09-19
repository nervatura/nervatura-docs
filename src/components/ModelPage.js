import React, { Component } from 'react';

import nom from '../config/img/nom.png'
import nom_rel from '../config/img/nom_rel.png'
import nom_uio from '../config/img/nom_uio.png'
import trans from '../config/img/trans.png'

class ModelPage extends Component {
  render() {
    return (
      <div id="main" className="w3-sand" >
        <div className="w3-container w3-justify w3-padding-16" style={{ maxWidth: 1000, margin: "auto" }} >
          <div className="w3-center bold w3-xxlarge" >Nervatura Object Model</div>
          
          <div className="w3-section">
            <div className="lnk" 
              onClick={() => {document.getElementById('overview').scrollIntoView() }}><i 
                className="fas fa-caret-right"></i><span style={{paddingLeft:6}} >Overview</span>
            </div>
            <div className="lnk" 
              onClick={() => {document.getElementById('object').scrollIntoView() }}><i 
                className="fas fa-caret-right"></i><span style={{paddingLeft:6}} >Objects</span>
            </div>
            <div className="lnk" 
              onClick={() => {document.getElementById('base_object').scrollIntoView() }}><i 
                className="fas fa-caret-right"></i><span style={{paddingLeft:6}} >Base objects</span>
            </div>
            <div className="lnk" 
              onClick={() => {document.getElementById('metadata').scrollIntoView() }}><i 
                className="fas fa-caret-right"></i><span style={{paddingLeft:6}} >Metadata</span>
            </div>
            <div className="lnk" 
              onClick={() => {document.getElementById('events').scrollIntoView() }}><i 
                className="fas fa-caret-right"></i><span style={{paddingLeft:6}} >Events</span>
            </div>
            <div className="lnk" 
              onClick={() => {document.getElementById('trans').scrollIntoView() }}><i 
                className="fas fa-caret-right"></i><span style={{paddingLeft:6}} >Transaction</span>
            </div>
            <div className="lnk" 
              onClick={() => {document.getElementById('link').scrollIntoView() }}><i 
                className="fas fa-caret-right"></i><span style={{paddingLeft:6}} >Relations</span>
            </div>
            <div className="lnk" 
              onClick={() => {document.getElementById('groups').scrollIntoView() }}><i 
                className="fas fa-caret-right"></i><span style={{paddingLeft:6}} >Group settings</span>
            </div>
            <div className="lnk" 
              onClick={() => {document.getElementById('complex').scrollIntoView() }}><i 
                className="fas fa-caret-right"></i><span style={{paddingLeft:6}} >Complex data types</span>
            </div>
            <div className="lnk" 
              onClick={() => {document.getElementById('other_object').scrollIntoView() }}><i 
                className="fas fa-caret-right"></i><span style={{paddingLeft:6}} >Other objects</span>
            </div>
            <div className="lnk" 
              onClick={() => {document.getElementById('ui_object').scrollIntoView() }}><i 
                className="fas fa-caret-right"></i><span style={{paddingLeft:6}} >User interface objects</span>
            </div>
            <div className="lnk" 
              onClick={() => {document.getElementById('pyramid').scrollIntoView() }}><i 
                className="fas fa-caret-right"></i><span style={{paddingLeft:6}} >Relations pyramid</span>
            </div>
            <div className="lnk" 
              onClick={() => {document.getElementById('appendix').scrollIntoView() }}><i 
                className="fas fa-caret-right"></i><span style={{paddingLeft:6}} >Objects relations</span>
            </div>
          </div>

          <div id="overview">
            <div className="bold w3-xlarge w3-section">Overview</div>
            <div>It is a general <span className="bold">open-data model</span>, which can store all information generated
              in the operation of a usual corporation. This covers all manufacturer, retailer
              and service companies (or governmental units) where the business operation can
              be defined and described within a <span className="bold">GOODS</span> (items, services to be sold, provided) –
              <span className="bold">CLIENT</span> (the recipient of goods) - <span className="bold">RESOURCE</span> (assets used to produce the goods)
              triangle.
            </div>

            <blockquote className="w3-panel w3-leftbar w3-white w3-text-dark-grey w3-padding-large ">
              <div>The open-data principle regulates the access to our business data. The point is the logic
                of the data storage. It means that the data are defined for storage so, that those are
                compliant with an open data-model which could be accessed and interpreted by anyone. It
                doesn't concern the physical storage of the data, that can be implemented according to
                one's needs. However it should ensure that data can be managed safely according to published
                description. Retrieving, new data creation, possibility to export the entire data structure
                should be provided.
              </div>

              <div className="italic w3-margin-top">
                What are the main advantages of open-data applications?
              </div>
              <ul >
                <li>
                  <span className="bold">safety:</span> provided one's have proper usage rights and physical access to a database,
                  then will be able to interpret and process the data correctly without any help or permission
                  from a third party. Information in the data becomes independent of any management system, its
                  treatment is not tied to specific programs or technologies.
                </li>
                <li>
                  <span className="bold">efficiency and cost reduction:</span> the business management system can be developed and
                  diversified in accordance with one's needs. There is no need and pressure to be tied to a
                  solution of any vendor, the most appropriate tools and programs can be selected for all tasks.
                  The only criteria is that selected applications should be able to communicate and exchange data
                  with each other or with a central database according to the open-data description. The elements
                  of the system can at any time be flexibly developed or new ones added by choosing the best offers
                  available on the market.
                </li>
              </ul>
            </blockquote>

            <div>It is located between the application surfaces that are using
              and creating the data and the real data storage layer. It defines
              logical objects; data is stored in these freely defined attributes
              and in relations between them. Its flexible structure allows
				      defining new properties or assigning events to our objects.
            </div>
            <div className="w3-section">The number of objects is minimal, their structure is simple. It
              has an easy to learn, clear and straightforward logic. However it is
              capable to store the required data in structures. It ensures the
              possibility to attach defined type metadata of any kind to each
              object and also makes the objects linkable to each other
				      arbitrarily.
            </div>
            <div>The data model is independent from data storage layer. The data storage can be
              implemented in any way or with any device but as a main requirement
				      the user of the data model must not sense this at all.
            </div>
          </div>

          <div id="object">
            <div className="bold w3-xlarge w3-section" >Objects</div>
            <div>
              <div className="w3-cell">
                <img src={nom} style={{ width: 325, height: 259 }} alt="nom" />
              </div>
              <div className="w3-cell w3-cell-top w3-padding w3-mobile">
                Such <span className="bold italic">pre-defined functional roles</span> which can have any type of
                attributs, events can be attached to them as well as their
                elements can be attached to elements of other objects.
              </div>
            </div>
          </div>

          <div id="base_object">
            <div className="bold w3-xlarge w3-section" >Base objects</div>
            <div>
              <span className="w3-text-orange bold">CUSTOMER</span> - all external partners
              of the company, including the buyer, consumer and supplier side
            </div>
            <div>
              <span className="w3-text-orange bold">PRODUCT</span> - all raw materials,
              semi-finished and end-products that are related to our activity (as
              customer or vendor), produced by us as a manufacturer or offered as
				      service
            </div>
            <div>
              <span className="w3-text-orange bold">TOOL, EMPLOYEE, PLACE</span> resources which are
              available for executing the activity and they contribute to it.
              These can be human resources (EMPLOYEE), material devices, tools,
              machines (TOOL) or financial, potentially infrastructural conditions
              such as warehouses, bank account, petty cash (PLACE)
            </div>
          </div>

          <div id="metadata">
            <div className="bold w3-xlarge w3-section" >Metadata</div>
            <div>
              All data that <span className="bold italic">describe a given object</span>, we want to attach to it
              as information. Some of them are pre-defined but further ones can
				      freely be defined for any of the objects.
            </div>
            <div className="w3-section">
              By using the <span className="w3-text-orange bold">DEFFIELD</span> object we can define data storage metadata
              for other objects. Besides the classical data types (bool, integer,
              float, date, time, string, notes) these can contain list of values
              (valuelist), url links (urlink) or references to concrete items
				      of other objects (customer, product, tool, employee, etc.).
            </div>
            <div>
              Through the <span className="w3-text-orange bold">FIELDVALUE</span> object every defined feature of the elements
				      of all objects can be queried.
            </div>
          </div>

          <div id="events">
            <div className="bold w3-xlarge w3-section" >Events</div>
            <div>
              <span className="bold italic">Extended object metadata, usually connected to a time or an interval.</span> With
              the help of events we can make the static metadata of an object
              into dynamic so the feature of a given component is able to take
              various values at different times. An event can also be valid for a
              period of time, so having a start and an end date. Optional number
				      of supplementary data of a given object can be attached to it, and it can be grouped as well.
            </div>
            <div className="w3-margin-top">
              We can manage the events through the <span className="w3-text-orange bold">EVENT</span> object. Beside the
				      base object we can also assign events to projects.
            </div>
          </div>

          <div id="trans">
            <div className="bold w3-xlarge w3-section" >Transaction</div>
            <div>
              Transaction <span className="bold italic">is such a sort of event to which at least two base
              objects are joined.</span>
            </div>
            <div className="w3-margin-top" >An event is always attached to a given object. As a further event
              feature another base object can be specified but it's just an optional
              additional data in this case.
            </div>
            <div>
              In the transactions the relation
              between the base objects is an indispensable and essential component
              of the given event. The transaction doesn’t belong to any of the
              base objects but the base objects are joined to a transaction. From
              these some base objects might be optional components but at least
              two should be indispensable part of it.
            </div>
            <div className="w3-section" >
              The most common object pair is the customer and product
              relationship (e.g.: offer, order, invoice) but any other combination
              is also possible, for example product-place (stock management),
              customer-tool (rental), employee-customer (worksheet) etc.
            </div>
            <div>
              We can link additional data to transactions just as to events, but
              in contrary to events, here we don’t use the features of the linked
              base object but we can declare own metadata. Transactions
              can also be linked to each other or can "originate" from each other,
              for instance offer <i className="fas fa-long-arrow-alt-right"></i> order <i 
              className="fas fa-long-arrow-alt-right"></i> inventory move <i 
              className="fas fa-long-arrow-alt-right"></i> invoice.
            </div>
            <div className="w3-margin-top">The object of transactions is the <span className="w3-text-orange bold">TRANS</span> which contains the main
              data of transactions as well as the single object relations. <span 
              className="w3-text-orange bold">ITEM</span> object contains PRODUCT lines linked to transactions, <span 
              className="w3-text-orange bold">PAYMENT</span> object
              contains financial settlements, <span className="w3-text-orange bold">MOVEMENT</span> object contains warehouse
              and tool movements.
            </div>
          </div>

          <div id="link">
            <div className="bold w3-xlarge w3-section" >Relations</div>
            <div>
              There are several possibilities to link single objects. Usually the object
              has the possibility of applying the one to one relation by default,
              if it is required so by its type. In case of need the additional
              data pointing to the proper type of object can also be generated at
              any time.
            </div>
            <div>
              For example we can set a customer type feature for
              CUSTOMER object wherewith we can link a given customer to another
              customer. With the same method one to many relations can also be
              set, so in this case we can also link our customer to some other
              customers.
            </div>
            <div className="w3-margin-top" >If any linked customer is also linked to an other customer it
              results in a many to many relation.
            </div>
            <div>
              <span className="w3-text-orange bold">LINK</span> object can also be used to
              set relations to objects. This way two objects can be linked without
              setting further object features.
            </div>
          </div>

          <div id="groups">
            <div className="bold w3-xlarge w3-section" >Group settings</div>
            <div>Several options are available for grouping the objects. Using
              supplementary data, further to data storage opportunities allows
              also grouping to a certain degree.
            </div>
            <div className="w3-section">In the <span className="w3-text-orange bold">GROUPS</span> object we can create groups by object types. If
              needed, further features can be defined for these groups. These can
              then be used for assignments of pre-defined values on a given object
              (for example type options), but through LINK object can also be used
              for creating classical one to many groups (for example customer or
              product groups).
            </div>
            <div>Actually the <span className="w3-text-orange bold">PROJECT</span> object can be interpreted as the extension of
              GROUPS object. Surely it is possible to set metadata
              here as well but at PROJECT object time related extension is also
              possible, just like it is in case of events vs. metadata. Optionally
              it can have start or end date, we can also link it to customers or
              places. Projects can also have their own events as well as any
              transaction can be linked to them.
            </div>
          </div>

          <div id="complex">
            <div className="bold w3-xlarge w3-section" >Complex data types</div>
            <div>When adding features to objects in some cases complex data
              feature setting is needed. Essentially <span 
                className="bold italic">these are such sub objects
              which possess own features.</span> For example if we want to add
              address data to a customer then by setting the address we can give
              the city, the zip code or the name of the street as well.
            </div>
            <div>
              Some complex data types can be linked not only to a single object but the
              same element can also be attached to many others. In some of them it
              is possible to define further metadata.
            </div>
            <div className="w3-section">One to many linked sub objects:
              <div>
                <span className="w3-text-orange bold">ADDRESS</span>,
                <span className="w3-text-orange bold">BARCODE</span>, <span 
                  className="w3-text-orange bold">CONTACT</span>, 
                <span className="w3-text-orange bold">PRICE</span>
              </div>
            </div>
            <div>One to one linked sub objects:</div>
            <div>
              <span className="w3-text-orange bold">CURRENCY, PATTERN, RATE, TAX</span>
            </div>
          </div>

          <div id="other_object">
            <div className="bold w3-xlarge w3-section" >Other objects</div>
            <div>The objects of rights management, logging and other options:</div>
            <div> 
              <span className="w3-text-orange bold">LOG</span>, 
              <span className="w3-text-orange bold">NUMBERDEF</span>
            </div>
          </div>

          <div id="ui_object">
            <div className="bold w3-xlarge w3-section" >User interface objects</div>
            <div>
              These objects <span className="bold italic">are not part of the object 
              model</span>, they are not
              needed for recording the workflow data. However certain applications
              to ensure their own operation might require data storage
              possibilities.
            </div>
            <div className="w3-section">
              <div>Storage of data of Reports:</div>
              <span className="w3-text-orange bold">UI_REPORT, UI_REPORTSOURCES, UI_REPORTFIELDS</span>
            </div>
            <div>
              <div>Settings of user interfaces:</div>
              <span className="w3-text-orange bold">UI_MENU, UI_MENUFIELDS</span>
            </div>
            <div className="w3-section">
              <div>User rights, settings:</div>
              <span className="w3-text-orange bold">UI_AUDIT, UI_USERCONFIG</span>
            </div>
            <div>
              <div>Regional settings:</div>
              <span className="w3-text-orange bold">UI_LANGUAGE, UI_MESSAGE</span></div>
            <div className="w3-section">
              <div>Printing: </div>
              <span className="w3-text-orange bold">UI_PRINTQUEUE</span></div>
          </div>

          <div id="pyramid">
            <div className="bold w3-xlarge w3-section" >Relations pyramid</div>
            <div className="italic w3-margin-bottom">For safe data export and import go from top to the bottom.</div>
            <table className="w3-table-all">
              <thead>
                <tr className="w3-text-blue-grey">
                  <th colSpan="2">Level</th>
                  <th>Metadata</th>
                  <th>Objects</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bold">level 1a</td>
                  <td>no external link</td>
                  <td>no</td>
                  <td><span className="w3-text-orange bold">GROUPS, NUMBERDEF</span></td>
                </tr>
                <tr>
                  <td className="bold">level 1b</td>
                  <td>no external link</td>
                  <td>yes*</td>
                  <td><span className="w3-text-orange bold">CURRENCY, TAX</span></td>
                </tr>
                <tr>
                  <td className="bold">level 2a</td>
                  <td>link to &lt;= level 1</td>
                  <td>no</td>
                  <td><span className="w3-text-orange bold">DEFFIELD, PATTERN</span></td>
                </tr>
                <tr>
                  <td className="bold">level 2b</td>
                  <td>link to &lt;= level 1</td>
                  <td>yes*</td>
                  <td><span className="w3-text-orange bold">CUSTOMER, EMPLOYEE, PLACE, PRODUCT</span></td>
                </tr>
                <tr>
                  <td className="bold">level 3</td>
                  <td>link to &lt;= level 2</td>
                  <td>yes*</td>
                  <td><span className="w3-text-orange bold">BARCODE, PRICE, PROJECT, RATE, TOOL</span></td>
                </tr>
                <tr>
                  <td className="bold">level 4</td>
                  <td>link to &lt;= level 3</td>
                  <td>yes*</td>
                  <td><span className="w3-text-orange bold">TRANS</span></td>
                </tr>
                <tr>
                  <td className="bold">level 5</td>
                  <td>link to &lt;= level 4</td>
                  <td>yes*</td>
                  <td><span className="w3-text-orange bold">EVENT, ITEM, MOVEMENT, PAYMENT</span></td>
                </tr>
                <tr>
                  <td className="bold">level 6</td>
                  <td>link to &lt;= level 5</td>
                  <td>yes*</td>
                  <td><span className="w3-text-orange bold">ADDRESS, CONTACT</span></td>
                </tr>
                <tr>
                  <td className="bold">level 7</td>
                  <td>link to &lt;= level 6</td>
                  <td>yes*</td>
                  <td><span className="w3-text-orange bold">LINK, LOG</span></td>
                </tr>
                <tr>
                  <td className="bold">level 8</td>
                  <td>link to &lt;= level 7</td>
                  <td>no</td>
                  <td><span className="w3-text-orange bold">FIELDVALUE</span></td>
                </tr>
                <tr>
                  <td colSpan="4" className="italic w3-small">
                  *Export with the FIELDVALUE (cross-references fields)
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w3-table-all w3-section">
              <thead>
                <tr className="w3-text-blue-grey">
                  <th colSpan="2">Level</th>
                  <th>Objects</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bold">level 1</td>
                  <td>no external link</td>
                  <td><span className="w3-text-orange bold">UI_MENU, UI_LANGUAGE</span></td>
                </tr>
                <tr>
                  <td className="bold">level 2a</td>
                  <td>link to &lt;= level 1</td>
                  <td><span className="w3-text-orange bold">UI_MESSAGE</span></td>
                </tr>
                <tr>
                  <td className="bold">level 2b</td>
                  <td>link to &lt;= NOM level 1</td>
                  <td><span className="w3-text-orange bold">UI_REPORT, UI_AUDIT</span></td>
                </tr>
                <tr>
                  <td className="bold">level 3</td>
                  <td>link to &lt;= level 2b</td>
                  <td><span className="w3-text-orange bold">UI_MENUFIELDS, UI_REPORTFIELDS, UI_REPORTSOURCES</span></td>
                </tr>
                <tr>
                  <td className="bold">level 4</td>
                  <td>link to &lt;= NOM level 2</td>
                  <td><span className="w3-text-orange bold">UI_USERCONFIG, UI_PRINTQUEUE</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div id="appendix">
            <div className="bold w3-xlarge w3-section" >Objects relations</div>
            <div className="italic w3-section" >1. picture: Document type (transtype) relations.</div>
            <img src={trans} style={{ maxWidth: 600 }} alt="trans" />
            <div className="italic w3-section" >2. picture: A possible relational database plan of NOM objects.</div>
            <img src={nom_rel} style={{ maxWidth: 900 }} alt="nom_rel" />
            <div className="italic w3-section" >3. picture: A possible relational database plan of user interface objects.</div>
            <img src={nom_uio} style={{ maxWidth: 560 }} alt="nom_uio" />
          </div>

        </div>
      </div>
    );
  }
}

export default ModelPage;