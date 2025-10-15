import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCapabilities extends Struct.ComponentSchema {
  collectionName: 'components_shared_capabilities';
  info: {
    displayName: 'capabilities';
  };
  attributes: {
    list: Schema.Attribute.Text;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    card: Schema.Attribute.Text;
  };
}

export interface SharedCardservices extends Struct.ComponentSchema {
  collectionName: 'components_shared_cardservices';
  info: {
    displayName: 'cardservices';
  };
  attributes: {
    fullDescription: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    shortDescription: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    contact_type: Schema.Attribute.Component<'shared.media', true>;
    narasi: Schema.Attribute.Component<'shared.quote', false>;
  };
}

export interface SharedDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_details';
  info: {
    displayName: 'details';
  };
  attributes: {
    capabilities: Schema.Attribute.Component<'shared.capabilities', true>;
    features: Schema.Attribute.Component<'shared.features', true>;
  };
}

export interface SharedFeatures extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    list: Schema.Attribute.Text;
  };
}

export interface SharedJson extends Struct.ComponentSchema {
  collectionName: 'components_shared_jsons';
  info: {
    displayName: 'datajson';
  };
  attributes: {
    data: Schema.Attribute.JSON;
    desc: Schema.Attribute.Text;
    judul: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    icon: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedMoreDetail extends Struct.ComponentSchema {
  collectionName: 'components_shared_more_details';
  info: {
    displayName: 'moreDetail';
  };
  attributes: {
    fitur: Schema.Attribute.RichText;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    judul: Schema.Attribute.String;
    narasi: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedServices2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_services2s';
  info: {
    displayName: 'services2';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.cardservices', true>;
    desc: Schema.Attribute.Text;
    judul: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {};
}

export interface SharedSlidertext extends Struct.ComponentSchema {
  collectionName: 'components_shared_slidertexts';
  info: {
    displayName: 'slidertext';
  };
  attributes: {
    slidertext: Schema.Attribute.Component<'shared.quote', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.capabilities': SharedCapabilities;
      'shared.card': SharedCard;
      'shared.cardservices': SharedCardservices;
      'shared.contact': SharedContact;
      'shared.details': SharedDetails;
      'shared.features': SharedFeatures;
      'shared.json': SharedJson;
      'shared.media': SharedMedia;
      'shared.more-detail': SharedMoreDetail;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.services2': SharedServices2;
      'shared.slider': SharedSlider;
      'shared.slidertext': SharedSlidertext;
    }
  }
}
