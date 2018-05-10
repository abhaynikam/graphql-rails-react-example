# frozen_string_literal: true

class Mutations::ContactUs::CreateContact < GraphQL::Function
  type Types::ContactType

  argument :contact, InputObjectTypes::ContactInputType

  def call(_obj, args, _ctx)
    @contact = Contact.new args[:contact].to_h

    if @contact.valid?
      Mailer.delay.contact_us_notification(@contact)
      @contact
    else
      @contact
    end
  end
end
