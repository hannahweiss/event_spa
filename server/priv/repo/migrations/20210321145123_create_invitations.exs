defmodule EventApp.Repo.Migrations.CreateInvitations do
  use Ecto.Migration

  def change do
    create table(:invitations) do
      add :body, :text, null: false
      add :event_id, references(:events, on_delete: :nothing)
      add :user_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:invitations, [:event_id])
    create index(:invitations, [:user_id])
  end
end
